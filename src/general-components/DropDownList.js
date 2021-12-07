const DropDownList = ({ type, text, list, IDs, object, setObject }) => {

    const handleRedirectChanges = (event) => {
        handleChanges(event);
        window.open(`/course=${IDs.courseID}/exam=${IDs.examID}/question=${parseInt(event.target.value)+1}`)
    }
    const handleChanges = (event) => {
        setObject(event.target.value);
    }

    return (
        <>
            <div dir='rtl' className="w-48 mb-5 mx-2 ">
                {text && <label className="block text-sm font-medium dark:text-white text-gray-700">{text}</label>}
                <select
                    value={object || -1}
                    onChange={IDs ? handleRedirectChanges : handleChanges}
                    className="text-center mt-1 block w-full py-2 px-3 border dark:text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option disabled value={-1}> בחר {text} </option>
                    {list.map((item, index) => <option key={item.id || index} value={type === "text" ? item.name : item.id || index}>{item.name || item || 'hello'}</option>)}
                </select>
            </div>
        </>
    )
}
export default DropDownList