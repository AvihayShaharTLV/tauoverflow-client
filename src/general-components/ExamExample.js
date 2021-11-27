const ExamExample = () => {
    return (
        <div className="dark:bg-gray-900 dark:bg-opacity-60 shadow cursor-pointer rounded-xl p-4 max-w-sm w-36 m-2">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-3 bg-indigo-600 rounded w-4/6"></div>
                    <div className="h-3 bg-indigo-600 rounded w-4/6"></div>
                    <div className="h-3 bg-indigo-600 rounded w-3/6"></div>
                    <div className="h-3 bg-indigo-600 rounded"></div>
                </div>
            </div>
        </div>
    )
}
export default ExamExample