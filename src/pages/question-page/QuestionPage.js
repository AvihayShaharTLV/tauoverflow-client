import CourseHeader from "../../components/course-header/CourseHeader";
import Discussions from '../../components/discussions/Discussions';
import { useParams } from "react-router";
import { useState, useEffect } from "react"
import { getAllTests } from "../../API/testApi";
import { getAllCourses } from '../../API/courseApi'

const QuestionPage = ({ setIsPopupOpen, isPopupOpen, setPopupType, contentUpdated }) => {

    const [courseName, setCourseName] = useState('');
    const [examDefenition, setExamDefenition] = useState('');
    const IDs = useParams();

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
                const tests = await getAllTests();
                tests.data.data.allTests.nodes.forEach(test => {
                    if (test.cid.trim() === IDs.courseID && test.id === parseInt(IDs.examID)) {
                        setExamDefenition(`שנה: ${test.year}, סמסטר: ${test.period}, מועד: ${test.semester}`)
                    }
                })
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [])

    return (
        <>
            <div dir='rtl' className="flex shadow rounded-lg p-5 dark:bg-gray-900 flex-col mx-auto my-10 items-center max-w-7xl">
                <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={courseName} examID={examDefenition} questionNum={IDs.questionID} discussionBTN={'דיון חדש'} />
            </div>
            <div dir="rtl" className="max-w-7xl m-auto">
                <Discussions type={'question'} contentUpdated={contentUpdated} />
            </div>
        </>
    )
}
export default QuestionPage