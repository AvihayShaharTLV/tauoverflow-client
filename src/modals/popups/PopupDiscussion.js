import { useState, useEffect } from 'react';
import Input from '../../general-components/Input';
import Button from '../../general-components/Button';
import TextArea from '../../general-components/TextArea';
import { createCourseDiscussion } from '../../API/discussionApi'
import { createTestDiscussion } from '../../API/discussionApi'
import { createQuestionDiscussion } from "../../API/questionApi";
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import UploadFile from '../../general-components/UploadFile';
import { uploadToS3 } from '../../s3-methods/uploadFile';

const PopupDiscussion = ({ setTitle, setIsPopupOpen, setContentUpdated, contentUpdated }) => {
    const { user } = useAuth0();

    let params = window.location.href.split('/').slice(3);
    let courseID, examID, questionNum;

    if (params[0]) courseID = params[0].split('=')[1];
    if (params[1]) examID = params[1].split('=')[1];
    if (params[2]) questionNum = params[2].split('=')[1];

    const [inputTitle, setInputTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isBTNdisabled, setIsBTNdisabled] = useState(false);

    // file uploading code
    const FILE_LIMIT = 500000;
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileInput = (file) => {
        if (file.size > 5000000) {
            alert("file uploading is limited up to 5MB");
            return;
        }
        setSelectedFile(file);
    }

    setTitle("צור דיון חדש");

    const postDiscussion = async (e) => {

        // check if there is a attachment && upload it to S3 
        let attachment = "";
        if (selectedFile){
            console.log("uploading to s3 disc",selectedFile);
            attachment = await uploadToS3(selectedFile, 'image')
        }
        // setIsBTNdisabled(true);
        console.log("post")
        console.log(inputTitle)
        // if the title is empty, don't let the user commit the discussion!
        if (inputTitle.trim().length <= 0) {
            alert("Discussion must have a title");
            setIsBTNdisabled(false);
            return;
        }

        // check what type of discussion the user wants to post {course, exam, question}
        let response;
        if (questionNum) {
            console.log('pushing a discussion to questions');
            let object = {
                "attachment": attachment ? attachment : null,
                "body": description.trim(),
                "qnum": parseInt(questionNum),
                "tid": parseInt(examID),
                "title": inputTitle.trim(),
                "uid": user.sub.split("|")[1],
            };
            console.log(object);
            response = await createQuestionDiscussion(object);
            console.log(response);
        }
        else if (examID) {
            console.log('pushing a discussion to exams');
            response = await createTestDiscussion({
                "uid": user.sub.split("|")[1],
                "cid": courseID,
                "tid": parseInt(examID),
                "title": inputTitle.trim(),
                "body": description.trim(),
                "attachment": attachment ? attachment : null
            });
        }
        else {
            console.log('pushing a discussion to courses');
            // console.log('courseID=',courseID);
            response = await createCourseDiscussion({
                "uid": user.sub.split("|")[1],
                "cid": courseID,
                "title": inputTitle.trim(),
                "body": description.trim(),
                "attachment": attachment ? attachment : null
            });
        }
        if (response.status === 200) {
            setIsPopupOpen(false);
            setContentUpdated(!contentUpdated);
        }
        else {
            alert('קרתה תקלה. אנא נסה בשנית')
        }
        setIsBTNdisabled(false);
        // console.log(response);
    }

    return (
        <div className="flex justify-between flex-col ">
            <Input setInputValue={setInputTitle} text={"כותרת"} type={"text"} />
            <TextArea setDescription={setDescription} text={"תיאור"} rows={6} />
            <UploadFile uploadTitle={"צרף תמונה"} uploadFileLimit={FILE_LIMIT} uploadType={"PNG"} handleFileInput={handleFileInput} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />
            <Button clickHandler={postDiscussion} text={"אישור"} disabled={isBTNdisabled} />
        </div>
    )
}
export default PopupDiscussion;
