import { useEffect, useState } from 'react';
import Input from '../../general-components/Input';
import Button from '../../general-components/Button';
import TextArea from '../../general-components/TextArea';

const PopupDiscussion = ({ setTitle }) => {
    setTitle("צור דיון חדש")

    const [inputTitle, setInputTitle] = useState("");
    // const [description, setDescription] = useState("");
    
    useEffect(()=>{
        // console.log(inputTitle)
    },[inputTitle])

    return (
        <div className="flex justify-between flex-col ">
            <Input setInputValue={setInputTitle} text={"כותרת"} type={"text"} />
            <TextArea text={"תיאור"} rows={6} />
            <Button text={"אישור"} />
        </div>
    )
}
export default PopupDiscussion;
