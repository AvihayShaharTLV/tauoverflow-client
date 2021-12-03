const Input = ({text, id, type}) => {
    return (
        <>
            <div dir="rtl" className="mx-2 mb-5 col-span-6 sm:col-span-3">
                <label htmlFor={id} className="block dark:text-white text-sm font-medium text-gray-700">{text}</label>
                <input
                    type={type}
                    name={id}
                    id={id}
                    className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
        </>
    )
}
export default Input