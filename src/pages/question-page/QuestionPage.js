import CourseHeader from "../../components/course-header/CourseHeader";
import { useParams } from "react-router";

const QuestionPage = ({setIsPopupOpen,isPopupOpen,setPopupType}) => {

    const IDs = useParams();
    console.log(IDs)

    return(
        <div dir='rtl' className="flex shadow rounded-lg p-5 dark:bg-gray-900 flex-col mx-auto my-10 items-center max-w-5xl">
            <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={'אלגוריתמים'} examID={IDs.examID} questionNum={IDs.questionID} discussionBTN={'דיון חדש'}/>
        </div>
    )
}
export default QuestionPage