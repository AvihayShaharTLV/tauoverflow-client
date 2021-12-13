import { useState } from 'react';
import Input from '../../general-components/Input';
import Button from '../../general-components/Button';
import TextArea from '../../general-components/TextArea';
import { createCourseDiscussion } from '../../API/discussionApi'
import { createTestDiscussion } from '../../API/discussionApi'
import { createQuestionDiscussion } from "../../API/questionApi";
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';

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

    setTitle("צור דיון חדש");

    const postDiscussion = async (e) => {
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
                "attachment": "",
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
                "attachment": ""
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
            <Button clickHandler={postDiscussion} text={"אישור"} disabled={isBTNdisabled} />
        </div>
    )
}
export default PopupDiscussion;
