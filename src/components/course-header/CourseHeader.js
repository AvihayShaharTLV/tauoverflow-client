import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"

const CourseHeader = ({ isPopupOpen, setIsPopupOpen, courseName, courseID, questionNum, button1Text, button2Text }) => {
    return (
        <div className="flex w-full items-center justify-between mb-5 border-b py-2 dark:border-gray-600">
            <div>
                {courseName && <H3 text={'שם הקורס: '+ courseName} />}
                {courseID && <H3 text={'מזהה מבחן: '+ courseID} />}
                {questionNum && <H3 text={'מספר שאלה: '+ questionNum} />}
            </div>
            <div>
                {button1Text && <Button text={button1Text} />}
                {button2Text && <Button text={button2Text} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>}
            </div>
        </div>
    )
}
export default CourseHeader