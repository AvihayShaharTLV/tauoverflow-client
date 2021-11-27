import CourseHeader from "../../components/course-header/CourseHeader";
import { useParams } from "react-router";

const QuestionPage = () => {

    const IDs = useParams();
    console.log(IDs)

    return(
        <div dir='rtl' className="flex shadow rounded-lg p-5 dark:bg-gray-900 flex-col mx-auto my-10 items-center max-w-5xl">
            <CourseHeader courseName={'אלגוריתמים'} courseID={IDs.courseID} questionNum={IDs.questionID} button1Text={'דיון חדש'}/>
        </div>
    )
}
export default QuestionPage