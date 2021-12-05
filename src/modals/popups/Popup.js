import { useState, useEffect } from "react";
import H3 from "../../general-components/H3";
import PopupDiscussion from "./PopupDiscussion";
import PopupFileUploading from "./PopupFileUploading";

const Popup = ({ popupType, setIsPopupOpen }) => {
    const [title, setTitle] = useState("");

    const renderPopup = () => {
        switch (popupType) {
            case "discussion":
                return <PopupDiscussion setTitle={setTitle} />
            case "file":
                return <PopupFileUploading setTitle={setTitle} />
            default:
                return "";
        }
    }
    return (
        <div dir="rtl" className="p-5 dark:bg-black rounded-xl transform -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 min-w-3/5 min-h-1/3 shadow-xl bg-gray-200 z-10">
            <div className="relative flex justify-center">
                <H3 text={title} />
                <p className="absolute left-0 -top-3 dark:text-white m-1 text-2xl cursor-pointer" onClick={() => setIsPopupOpen(false)}>&times;</p>
            </div>
            {renderPopup()}
        </div>
    )


}
export default Popup;