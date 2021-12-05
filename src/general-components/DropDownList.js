import { useState } from "react";

const DropDownList = ({ selected, text, list, IDs, object, setObject }) => {

    // const [select, setSelect] = useState(object || -1);
    console.log(selected);

    const handleRedirectChanges = (event) => {
        handleChanges(event);
        window.open(`/course/${IDs.courseID}/exam/${IDs.examID}/question/${event.target.value}`)
    }
    const handleChanges = (event) => {
        // setSelect(event.target.value);
        setObject(event.target.value);
    }
    const renderList = () => {

    }

    return (
        <>
            <div dir='rtl' className="w-48 mb-5 mx-2 ">
                {text && <label className="block text-sm font-medium dark:text-white text-gray-700">{text}</label>}
                <select
                    value={selected || object || -1}
                    onChange={IDs ? handleRedirectChanges : handleChanges}
                    className="text-center mt-1 block w-full py-2 px-3 border dark:text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option disabled value={selected || -1}> בחר {text} </option>
                    {/* {renderList()} */}
                    {list.map((item, index) => <option key={item.id || index} value={item.id || index}>{item.name || item || 'hello'}</option>)}
                </select>
            </div>
        </>
    )
}
export default DropDownList