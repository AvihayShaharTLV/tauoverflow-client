import { useParams } from "react-router";

const DropDownList = ({ value, enableNulls, type, text, list, IDs, object, setObject }) => {

    const allIDs = useParams();

    const handleRedirectChanges = (event) => {
        handleChanges(event);
        window.open(`/course=${IDs.courseID}/exam=${IDs.examID}/question=${parseInt(event.target.value)}`)
    }
    const handleChanges = (event) => {
        if (allIDs.questionID) setObject(parseInt(event.target.value) + 1)
        else setObject(event.target.value);
    }

    return (
        <>
            <div dir='rtl' className="w-48 mb-5 mx-1 ">
                {text && <label className="block text-sm font-medium dark:text-white text-gray-700">{text}</label>}
                <select
                    disabled={value ? true : false}
                    value={value || object || -1}
                    onChange={IDs ? handleRedirectChanges : handleChanges}
                    className=" scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-100 dark:scrollbar-thumb-gray-500 text-center dark:text-white dark:bg-gray-600 dark:border-gray-600 mt-1 block w-full py-2 px-3 borde border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option className="" disabled={!enableNulls} value={-1}> בחר {text} </option>
                    {list.map((item, index) => <option className="" key={item.id || index} value={type === "text" ? item.name : item.id || index}>{item.name || item || 'hello'}</option>)}
                </select>
            </div>
        </>
    )
}
export default DropDownList