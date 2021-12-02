import ExamFilter from "../../components/exam-filter/ExamFilter";
import ExamsList from "../../components/exams-list/ExamsList";
import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from "../../components/discussions/Discussions";
import PopupFileUploading from "../../components/file-uploading/PopupFileUploading";
// import { useParams } from "react-router";


const CoursePage = ({setIsPopupOpen,isPopupOpen}) => {
    
    // const IDs = useParams();
    // useEffect(()=>{
    //     if(isPopupOpen){
    //         document.documentElement.classList.add("filter")
    //         document.documentElement.classList.add("blur-lg")
    //     } 
    //     else{
    //         document.documentElement.classList.remove("filter")
    //         document.documentElement.classList.remove("blur-lg")
    //     }
    //     console.log(document.documentElement)
    // },[isPopupOpen]);

    return (

        <div dir='rtl' className=" flex shadow rounded-lg p-5 flex-col mx-auto my-10 items-center max-w-5xl dark:text-white dark:bg-gray-800 ">
            <div className="w-full flex flex-col">
                <CourseHeader isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={'אלגוריתמים'} button1Text={'דיון חדש'} button2Text={'הוסף מבחן'} />
                <Discussions />
            </div>
            <ExamFilter />
            {true && <ExamsList />}
        </div>
    )
}
export default CoursePage