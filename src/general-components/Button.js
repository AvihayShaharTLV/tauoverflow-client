const Button = ({ clickHandler, text, isPopupOpen, setIsPopupOpen, disabled, setPopupType, type }) => {
    if (setIsPopupOpen) {
        return <button
            onClick={() => {
                setIsPopupOpen(!isPopupOpen);
                setPopupType(type);
            }
            }
            disabled={disabled ? true : false}
            className="inline-flex justify-center py-2 mx-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {text}
        </button>
    }
    else if (clickHandler) {
        return <button
            onClick={(e) => clickHandler(e)}
            disabled={disabled ? true : false}
            className="inline-flex justify-center py-2 mx-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {text}
        </button>
    }
    else {
        return <button
            disabled={disabled ? true : false}
            className="inline-flex justify-center py-2 mx-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {text}
        </button>
    }

}
export default Button