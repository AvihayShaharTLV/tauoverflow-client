import H3 from "../../general-components/H3"
import DropDownList from "../../general-components/DropDownList"
import Button from "../../general-components/Button"

const year = ['2001', '2002', '2003', '2018'];
const semester = ['א', 'ב', 'קיץ'];
const due = ['א', 'ב', 'ג', 'מיוחד'];

const ExamFilter = () => {
    return (
        <div className="dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center mb-3">
                <H3 text={'סינון מבחנים'} />
            </div>
            <div className="flex flex-col md:flex-row items-center my-2 w-full justify-center">
                <DropDownList text={'שנה'} id={'year'} list={year} />
                <DropDownList text={'סמסטר'} id={'semester'} list={semester} />
                <DropDownList text={'מועד'} id={'due'} list={due} />
            </div>
            <div className="flex my-2 w-full justify-center">
                <Button text={'סינון'} />
            </div>
        </div>
    )
}
export default ExamFilter