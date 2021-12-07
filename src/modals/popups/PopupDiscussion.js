import { useState } from 'react';
import Input from '../../general-components/Input';
import Button from '../../general-components/Button';
import TextArea from '../../general-components/TextArea';
import { createCourseDiscussion } from '../../API/discussionApi'
import { createTestDiscussion } from '../../API/discussionApi'

const PopupDiscussion = ({ setTitle, setIsPopupOpen }) => {

    let params = window.location.href.split('/').slice(3);
    let courseID, examID, questionNum;

    if (params[0]) courseID = params[0].split('=')[1];
    if (params[1]) examID = params[1].split('=')[1];
    if (params[2]) questionNum = params[2].split('=')[1];

    console.log(courseID, examID, questionNum);

    const [inputTitle, setInputTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isBTNdisabled, setIsBTNdisabled] = useState(false);

    setTitle("צור דיון חדש");

    const postDiscussion = async (e) => {
        setIsBTNdisabled(true);

        const courseID = window.location.href.split('=').slice(-1)[0];
        console.log(courseID);

        console.log('title length:', inputTitle.trim().length);
        if (inputTitle.trim().length <= 0) {
            alert("Discussion must have a title");
            setIsBTNdisabled(false);
            return;
        }

        console.log([inputTitle, description, courseID]);
        let res;
        if(questionNum){

        }
        else if(examID){
            res = await createTestDiscussion({
                "uid": 1,
                "cid": courseID,
                // "tid": examID, <--- won't work because there is no such exam in the DB
                "tid": 1,
                "title": inputTitle,
                "body": description,
                "attachment": ""
            });

        }
        else if(courseID){
            res = await createCourseDiscussion({
                "uid": 1,
                "cid": courseID,
                "title": inputTitle,
                "body": description,
                "attachment": ""
            });
        }
        
        if (res.status === 200) {
            alert('דיון חדש נוצר בהצלחה');
            setIsPopupOpen(false);
        }
        else {
            alert('קרתה תקלה. אנא נסה בשנית')
        }
        setIsBTNdisabled(false);
        console.log(res);
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
