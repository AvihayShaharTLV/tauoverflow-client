import { useState } from "react";

const DropDownList = ({ selected, text, id, list, IDs }) => {
    const [select, setSelect] = useState(selected||0);

    const handleRedirectChanges = (event) => {
        handleChanges(event);
        window.open(`/course/${IDs.courseID}/exam/${IDs.examID}/question/${event.target.value}`)
    }
    const handleChanges = (event) => {
        setSelect(event.target.value);
    }


    return (
        <>
            <div dir='rtl' className="w-48 mb-5 mx-2 ">
                {text && <label htmlFor={id} className="block text-sm font-medium dark:text-white text-gray-700">{text}</label>}
                <select
                    value={select}
                    onChange={IDs ? handleRedirectChanges : handleChanges}
                    id={id}
                    name={id}
                    className="text-center mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option disabled value={0}> בחר {text} </option>
                    {list.map((item, index) => <option key={index} value={index + 1}>{item}</option>)}
                </select>
            </div>
        </>
    )
}
export default DropDownList