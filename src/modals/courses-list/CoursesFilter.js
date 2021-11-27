import DropDownList from "../../general-components/DropDownList"
import Button from "../../general-components/Button"
import { Link } from "react-router-dom"

const faculties = ['פקולטה', 'select', 'faculty', ['תחתים מדויקים', 'הנדסת תחת', 'תחתי הרוח']]
const routes = ['מסלול', 'select', 'route', ['מדעי התחת', 'רפואת תחת', 'תחתולוגיה', 'תחתיה וניהול', 'תורת התחת']]
const courses = ['קורס', 'select', 'courses', ['מתמטיקה בתחת', 'אינפיתחת', 'לוגיתחת', 'אלגוריתחת']]

const CoursesFilter = () => {
    return (
        <div dir='rtl' className="my-10 flex items-center justify-center ">
            <div className="flex flex-col items-center p-5 shadow rounded-lg dark:bg-gray-900">
                <div className="mx-6 flex">
                    <DropDownList text={faculties[0]} id={faculties[2]} list={faculties[3]} />
                    <DropDownList text={routes[0]} id={routes[2]} list={routes[3]} />
                    <DropDownList text={courses[0]} id={courses[2]} list={courses[3]} />
                </div>
                <Link to='/course/5'>
                    <div className="mx-6">
                        <Button text={'חפש'} />
                    </div>
                </Link>
                <div></div>
            </div>
        </div>
    )
}
export default CoursesFilter