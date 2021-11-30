import ExamFilter from "../../components/exam-filter/ExamFilter";
import ExamsList from "../../components/exams-list/ExamsList";
import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from "../../components/discussions/Discussions";
import {getAllCourseDiscussions} from "../../API/coursesApi"
// import { useParams } from "react-router";

const CoursePage = () => {

    // const IDs = useParams();
    getAllCourseDiscussions();

    return (
        <div dir='rtl' className="flex shadow rounded-lg p-5 flex-col mx-auto my-10 items-center max-w-5xl dark:text-white dark:bg-gray-800">
            <div className="w-full flex flex-col">
                <CourseHeader courseName={'אלגוריתמים'} button1Text={'דיון חדש'} button2Text={'הוסף מבחן'} />
                <Discussions />
            </div>
            <ExamFilter />
            {true && <ExamsList />}
        </div>
    )
}
export default CoursePage