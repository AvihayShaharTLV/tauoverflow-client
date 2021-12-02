const DropDownList = ({text, id, list, IDs}) => {
    const handleChanges = (event) => {
        console.log(IDs);
        window.open(`/course/${IDs.courseID}/exam/${IDs.examID}/question/${event.target.value}`)
    }

    return (
        <>
            <div dir='rtl' className="w-48 mb-5 mx-2 ">
                {text && <label htmlFor={id} className="block text-sm font-medium dark:text-white text-gray-700">{text}</label>}
                {IDs ? <select
                    value={0}
                    onChange="window.open(this.value)"
                    onChange={handleChanges}
                    id={id}
                    name={id}
                    className="text-center mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option selected disabled='disabled'> בחר {text} </option>
                    {list.map((item,index) => <option key={index} value={index+1}>{item}</option>)}
                </select> 
                :
                <select
                    id={id}
                    value={0}
                    name={id}
                    className="text-center mt-1 dark:text-black block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option selected disabled='disabled'> בחר {text} </option>
                    {list.map((item,index) => <option key={index}>{item}</option>)}
                </select>}
            </div>
        </>
    )
}
export default DropDownList