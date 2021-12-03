import ExamFilter from "../../components/exam-filter/ExamFilter";
import ExamsList from "../../components/exams-list/ExamsList";
import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from "../../components/discussions/Discussions";
import PopupFileUploading from "../../modals/popups/PopupFileUploading";
// import { useParams } from "react-router";


const CoursePage = ({setPopupType,setIsPopupOpen,isPopupOpen,}) => {
    return (

        <div dir='rtl' className=" flex shadow rounded-lg p-5 flex-col mx-auto my-10 items-center max-w-5xl dark:text-white dark:bg-gray-800 ">
            <div className="w-full flex flex-col">
                <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={'אלגוריתמים'} discussionBTN={'דיון חדש'} filesUploadBTN={'הוסף מבחן'} />
                <Discussions isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            </div>
            <ExamFilter />
            {true && <ExamsList />}
        </div>
    )
}
export default CoursePage