import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUserCourses, deleteUserCourse, createUserCourse } from "../../API/usersApi"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TrashIcon, FolderAddIcon, StarIcon } from '@heroicons/react/outline'
import ReactTooltip from "react-tooltip";
import DropDownList from "../../general-components/DropDownList";

const CourseHeader = ({ avgVote, hasUserVoted, userRate, setUserRate, setIsListUpdated, isListUpdated, addToFav, setPopupType, isPopupOpen, setIsPopupOpen, courseName, examID, questionNum, discussionBTN, filesUploadBTN }) => {
    const { user, isLoading } = useAuth0();
    const [userCourses, setUserCourses] = useState([]);
    const [doesInclude, setDoesInclude] = useState(false);
    const IDs = useParams();

    useEffect(() => {
        (async () => {
            try {
                if (!isLoading) {
                    if (user) {
                        const response = await getAllUserCourses();
                        const allUserCourses = response?.data?.data?.allUserCourses?.nodes;
                        setUserCourses(allUserCourses.filter(course =>
                            course.uid === user.sub.split("|")[1]));
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [isLoading])


    useEffect(() => {
        for (let course of userCourses) {
            if (course.cid === IDs.courseID) {
                setDoesInclude(true);
                return;
            };
        }
        setDoesInclude(false);
    }, [userCourses])

    const editCourseList = async (type) => {
        // add object to the list and check if it has more than 10 inside of it
        if (type === 'add') {
            const response = await getAllUserCourses();
            if (response.data.data.allUserCourses.nodes.filter(course => course.uid === user.sub.split("|")[1]).length >= 10) {
                alert("הגעת למקסימום הקורסים שניתן לעקוב אחריהם");
                return;
            }
            else {
                const response = await createUserCourse({
                    "uid": user.sub.split("|")[1],
                    "cid": IDs.courseID
                });
                if (response.status === 200) alert('קורס זה נוסף בהצלחה!');
            }
        }
        // remove object from the list
        else {
            const response = await deleteUserCourse({
                "uid": user.sub.split("|")[1],
                "cid": IDs.courseID
            });
            if (response.status === 200 && !response.data.error) alert('קורס זה נמחק בהצלחה!');
        }
        // this way or another, fetch the new table to refresh the web
        const response = await getAllUserCourses();
        setUserCourses(response.data.data.allUserCourses.nodes.filter(course => course.uid === user.sub.split("|")[1]));
        setIsListUpdated(!isListUpdated);
    }

    // console.log('questionNum', questionNum, 'avgVote', avgVote, 'userRate', userRate)

    return (
        <div className="flex flex-col w-full sm:flex-row items-center justify-between mb-5 border-b py-2 dark:border-gray-600">
            {/* course, exam, question info */}
            <div className="my-2">
                {courseName && <H3 text={'שם הקורס: ' + courseName} />}
                {examID && <H3 text={`שנה: ${examID.year}, סמסטר: ${examID.semester}, מועד: ${examID.period}`} />}
                {questionNum && <H3 text={'מספר שאלה: ' + questionNum} />}
                {questionNum && avgVote !== NaN && avgVote !== 0 && <H3 text={`רמת קושי ממוצעת: ${avgVote}`} />}
            </div>
            {/* question rating */}
            {!hasUserVoted && IDs.questionID &&
                <div className="flex my-2 flex-col items-center justify-center">
                    <h1>בחר רמת קושי</h1>
                    <div className="flex justify-center items-center">
                        <DropDownList object={userRate} setObject={setUserRate} list={[1, 2, 3, 4, 5]} />
                    </div>
                </div>}

            {/* buttons info */}
            <div className="flex my-2">
                {addToFav && <div className="flex items-center justify-center">
                    {doesInclude && <TrashIcon data-tip data-for="included" className="w-7 h-7 mx-4 text-indigo-700" onClick={() => editCourseList('remove')} />}
                    {/* <ReactTooltip id="included" className="text-center" place="bottom" effect="solid">הסר קורס מהרשימה</ReactTooltip>
                    <ReactTooltip id="excluded" className="text-center" place="bottom" effect="solid">הוסף קורס לרשימה</ReactTooltip> */}
                    {!doesInclude && <FolderAddIcon data-tip data-for="excluded" className="w-7 h-7 mx-4 text-indigo-700" onClick={() => editCourseList('add')} />}
                </div>}
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {hasUserVoted && IDs.questionID &&
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex justify-center items-center">
                                <p data-tip data-for="vote" className="bg-indigo-700 h-10 w-10 text-center p-2 text-white rounded-full shadow hover:bg-indigo-600 transition ease-in-out">{parseInt(userRate)}</p>
                                <ReactTooltip id="vote" className="text-center" place="bottom" effect="solid">רמת הקושי שבחרת</ReactTooltip>
                            </div>
                        </div>}
                    {discussionBTN && <Button text={discussionBTN} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} type={"discussion"} />}
                    {filesUploadBTN && <Button text={filesUploadBTN} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} type={"file"} />}
                </div>
            </div>
        </div>
    )
}
export default CourseHeader