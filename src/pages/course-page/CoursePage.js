import ExamFilter from "../../components/exam-filter/ExamFilter";
import ExamsList from "../../components/exams-list/ExamsList";
import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from "../../components/discussions/Discussions";
import { getAllCourseDiscussions } from "../../API/courseApi";
import { getAllCourses } from '../../API/courseApi'
import { useEffect, useState } from "react";
import { useParams } from "react-router"


const CoursePage = ({ setPopupType, setIsPopupOpen, isPopupOpen }) => {

    const [courseName, setCourseName] = useState('');
    const [discussions, setDiscussions] = useState([]);
    const IDs = useParams();

    useEffect(() => {
        (async () => {
            try {
                let response = await getAllCourseDiscussions();
                const allDiscussions = response?.data?.data?.allCourseDiscussions?.nodes;
                response = await getAllCourses();
                let allCourses = response?.data?.data?.allCourses?.nodes;
                allCourses.forEach(course =>{
                    if(course.id === IDs.courseID){
                        setCourseName(course.name);
                    }
                });
                setDiscussions(allDiscussions.filter(discussion => IDs.courseID === discussion.cid.trim()));
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <div dir='rtl' className=" flex shadow rounded-lg p-5 flex-col mx-auto my-10 items-center max-w-8xl dark:text-white dark:bg-gray-900 ">
            <div className="w-full flex flex-col">
                <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={courseName} discussionBTN={'דיון חדש'} filesUploadBTN={'הוסף מבחן'} />
                <Discussions discussions={discussions}/>
            </div>
            <ExamFilter />
            {false && <ExamsList />}
        </div>
    )
}
export default CoursePage