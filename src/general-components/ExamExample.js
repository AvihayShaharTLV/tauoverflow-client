const ExamExample = ({ exam }) => {
    return (
        <div className="transition duration-300 ease-in-out shadow p-5 mx-1 rounded-xl w-50 hover:bg-gray-100 cursor-pointer   dark:bg-gray-800 ">
            <p>שנה: {exam.year}</p>
            <p>סמסטר: {exam.semester}</p>
            <p>מועד: {exam.period}</p>
            <p>מזהה: {exam.cid}</p>
        </div>
    )
}
export default ExamExample