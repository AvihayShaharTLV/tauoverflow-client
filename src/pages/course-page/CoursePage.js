import ExamFilter from "../../components/exam-filter/ExamFilter";
import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from "../../components/discussions/Discussions";
import { getAllCourses } from '../../API/courseApi'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth0 } from '@auth0/auth0-react'

const CoursePage = ({ contentUpdated, setPopupType, setIsPopupOpen, isPopupOpen }) => {

    const [courseName, setCourseName] = useState('');
    const IDs = useParams();
    const { user } = useAuth0();

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllCourses();
                const allCourses = response?.data?.data?.allCourses?.nodes;
                allCourses.forEach(course => {
                    if (course.id === IDs.courseID) {
                        setCourseName(course.name);
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        })();
    })


    return (
        <div dir='rtl' className=" flex shadow rounded-lg p-5 flex-col mx-auto my-10 items-center max-w-7xl dark:text-white dark:bg-gray-900 ">
            <div className="w-full flex flex-col">
                <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={courseName} discussionBTN={'דיון חדש'} filesUploadBTN={'הוסף מבחן'} />
                <Discussions type={'course'} contentUpdated={contentUpdated} />
            </div>
            <ExamFilter />
        </div>
    )
}
export default CoursePage