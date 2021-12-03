import DropDownList from "../../general-components/DropDownList"
import Input from '../../general-components/Input'

const year = ['2001', '2002', '2003', '2018'];
const semester = ['א', 'ב', 'קיץ'];
const due = ['א', 'ב', 'ג', 'מיוחד'];

const GroupedDDLs = ({ upload }) => {

    const generateArrayOfYears = (n) => {
        let max = new Date().getFullYear()
        let min = max - n
        let years = []

        for (var i = max; i >= min; i--) {
            years.push(i)
        }
        return years
    }

    const findSemester = () => {
        let month = new Date().getMonth() + 1;
        switch (month) {
            case 11: case 12: case 1: case 2:
                return 1;
            case 3: case 4: case 5: case 6:
                return 2;
            case 7: case 8: case 9: case 10:
                return 3;
            default:
                break;
        }
    }

    return (
        <div dir="rtl" className="flex flex-col items-center my-2 w-full justify-center">
            <div className="flex md:flex-row ">
                <DropDownList selected={upload ? new Date().getFullYear() - new Date().getFullYear()-1 : null} text={'שנה'} id={'year'} list={upload ? generateArrayOfYears(10) : generateArrayOfYears(20)} />
                <DropDownList selected={upload ? findSemester() : null} text={'סמסטר'} id={'semester'} list={semester} />
                <DropDownList text={'מועד'} id={'due'} list={due} />
            </div>
            {upload &&
                <div className="flex md:flex-row">
                    <Input text={'מרצה'} id={'maestro'} type={'text'} />
                    <Input text={'מספר שאלות'} id={'questionsNumber'} type={'text'} />
                </div>}
        </div>

    )
}
export default GroupedDDLs