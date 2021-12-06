// import { useState } from "react";
import DropDownList from "../../general-components/DropDownList"
import Input from '../../general-components/Input'


const semestersList = ['א', 'ב', 'קיץ'];
const duesList = ['א', 'ב', 'ג', 'מיוחד'];

const GroupedDDLs = ({ upload, setYear, setSemester, setDue }) => {

    // const [year, setYear] = useState(null);
    // const [semester, setSemester] = useState(null);
    // const [due, setDue] = useState(null);
    // const [maestro, setMaestro] = useState(null);
    // const [questionNum, setQuestionNum] = useState(null);

    const generateArrayOfLastYears = (n) => {
        let years = [];
        let maxYear = new Date().getFullYear();
        let minYear = maxYear - n;
        for (let i = maxYear; i >= minYear; i--) years.push(i);
        return years;
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
            <div className="flex flex-col md:flex-row ">
                <DropDownList selected={upload ? new Date().getFullYear() - new Date().getFullYear() - 1 : null} text={'שנה'} id={'year'} list={upload ? generateArrayOfLastYears(10) : generateArrayOfLastYears(20)} />
                <DropDownList selected={upload ? findSemester() : null} text={'סמסטר'} id={'semester'} list={semestersList} />
                <DropDownList text={'מועד'} id={'due'} list={duesList} />
            </div>
            {upload &&
                <div className="flex md:flex-row">
                    <Input text={'מרצה'} id={'maestro'} type={'text'} />
                    <Input text={'מספר שאלות'} id={'questionsNumber'} type={'number'} />
                </div>}
        </div>

    )
}
export default GroupedDDLs