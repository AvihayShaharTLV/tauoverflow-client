import ExamExample from "../../general-components/ExamExample"
import H3 from "../../general-components/H3"
import { Link, useParams } from "react-router-dom"

const ExamsList = ({ exams }) => {
    console.log(exams)
    const IDs = useParams();

    return (
        <div className="my-5 px-3 flex flex-col items-center">
            <div className="mb-3 flex justify-center items-center">
                <H3 text={'מבחנים'} />
            </div>
            <div className="flex flex-wrap justify-center">
                {exams.map((exam, index) => <Link key={index} to={`/course=${IDs.courseID}/exam=${exam.id}`}><ExamExample exam={exam}/></Link>)}
            </div>
            
        </div>
    )
}
export default ExamsList