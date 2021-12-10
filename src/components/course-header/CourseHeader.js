import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"

const CourseHeader = ({ setPopupType,isPopupOpen, setIsPopupOpen, courseName, examID, questionNum, discussionBTN, filesUploadBTN }) => {
    return (
        <div className="flex w-full items-center justify-between mb-5 border-b py-2 dark:border-gray-600">
            <div>
                {courseName && <H3 text={'שם הקורס: '+ courseName} />}
                {examID && <H3 text={examID} />}
                {questionNum && <H3 text={'מספר שאלה: '+ questionNum} />}
            </div>
            <div>
                {discussionBTN && <Button text={discussionBTN} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} type={"discussion"}/>}
                {filesUploadBTN && <Button text={filesUploadBTN} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} type={"file"}/>}
            </div>
        </div>
    )
}
export default CourseHeader