const Input = ({text, type,setInputValue}) => {

    return (
        <>
            <div dir="rtl" className="mx-2 mb-5 col-span-6 sm:col-span-3">
                <label className="block dark:text-white text-sm font-medium text-gray-700">{text}</label>
                <input min={0} onChange={(e) => setInputValue(e.target.value.trim())}
                    min={1}
                    type={type}
                    className=" dark:text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-600 rounded-md" />
            </div>
        </>
    )
}
export default Input