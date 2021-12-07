const TextArea = ({text, rows, setDescription}) =>{
    return (
        <>
            <div dir="rtl" className="mx-2 mb-5 col-span-6 sm:col-span-3">
                <label className="block dark:text-white text-sm font-medium text-gray-700">{text}</label>
                <textarea onChange={(e) => setDescription(e.target.value.trim())} rows={rows} cols="100" 
                    className="scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-100 dark:scrollbar-thumb-gray-500 resize-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
        </>
    )
}
export default TextArea;