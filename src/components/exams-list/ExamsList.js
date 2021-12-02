import ExamExample from "../../general-components/ExamExample"
import H3 from "../../general-components/H3"
import { Link, useParams } from "react-router-dom"

const exams = ['algebra', 'tesla', 'hello', 'si!']

const ExamsList = () => {
    
    const IDs = useParams();
    
    return (
        <div className="my-5 px-3 flex flex-col items-center">
            <div className="mb-3">
                <H3 text={'מבחנים'} />
            </div>
            <div className="flex flex-wrap justify-center">
               {exams.map((exam,index) => <Link key={index} to={`/course/${IDs.courseID}/exam/${index+1}`}><ExamExample /></Link>)}
            </div>
            {/* <div className="shadow p-5 rounded-xl cursor-pointer">
                <p>שנה: 2005</p>
                <p>סמסטר: א'</p>
                <p>מועד: א'</p>
                <p>מזהה: 205582BAD</p>
            </div> */}
        </div>
    )
}
export default ExamsList