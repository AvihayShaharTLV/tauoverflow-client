import CourseHeader from "../../components/course-header/CourseHeader"
import QuestionSelector from "../../components/question-selector/QuestionSelector"
import H4 from "../../general-components/H4"
import { DocumentTextIcon } from '@heroicons/react/solid'
// import { DocumentTextIcon } from '@heroicons/react/outline'
import { getAllCourseDiscussions } from "../../API/courseApi";
import { getAllCourses } from '../../API/courseApi'
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import Discussions from "../../components/discussions/Discussions"

const ExamPage = ({setIsPopupOpen,isPopupOpen,setPopupType}) => {
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
        <>
            <div dir='rtl' className="flex shadow rounded-lg p-5 flex-col dark:bg-gray-900 mx-auto my-10 items-center max-w-7xl">
                <div className="w-full">
                <CourseHeader setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} courseName={'אלגוריתמים'} examID={IDs.examID} discussionBTN={'דיון חדש'} filesUploadBTN={'העלה טופס'} />
                    <div className="flex mr-5 dark:text-white">
                        <div className="my-2 mx-5">
                            <div>
                                <H4 text={'טופס המבחן'} />
                            </div>
                            <div className="pr-5">
                                <div className="flex items-center">
                                    <DocumentTextIcon className="cursor-pointer h-7 w-7 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                                    <p>נוסח בעברית</p>
                                </div>
                                <div className="flex items-center">
                                    <DocumentTextIcon className="cursor-pointer h-7 w-7 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                                    <p>נוסח באנגלית</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 mx-5 ">
                            <div>
                                <H4 text={'פתרונות'} />
                            </div>
                            <div className="pr-5">
                                <div className="flex items-center">
                                    <DocumentTextIcon className="cursor-pointer h-7 w-7 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                                    <p>פתרון 1 - ציון 100</p>
                                </div>
                                <div className="flex items-center">
                                    <DocumentTextIcon className="cursor-pointer h-7 w-7 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                                    <p>פתרון 2 - ציון 98</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Discussions discussions={discussions}/>
                    <QuestionSelector />
                </div>
            </div>
        </>
    )
}
export default ExamPage