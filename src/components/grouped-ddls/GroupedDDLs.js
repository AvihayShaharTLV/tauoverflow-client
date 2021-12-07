// import { useState } from "react";
import DropDownList from "../../general-components/DropDownList"
import Input from '../../general-components/Input'

const semestersList = ['א', 'ב', 'קיץ'];
const duesList = ['א', 'ב', 'ג', 'מיוחד'];

const GroupedDDLs = ({ upload, setYear, year, setSemester, semester, setDue, due, setMaestro, setQuestionNum }) => {


    const generateArrayOfLastYears = (n) => {
        let years = [];
        let maxYear = new Date().getFullYear();
        let minYear = maxYear - n;
        for (let i = maxYear; i >= minYear; i--) years.push(i);
        return years;
    }



    return (
        <div dir="rtl" className="flex flex-col items-center my-2 w-full justify-center">
            <div className="flex flex-col md:flex-row ">
                <DropDownList type={"text"} object={year} setObject={setYear} text={'שנה'} list={upload ? generateArrayOfLastYears(10) : generateArrayOfLastYears(20)} />
                <DropDownList type={"text"} object={semester} setObject={setSemester} text={'סמסטר'} list={semestersList} />
                <DropDownList type={"text"} object={due} setObject={setDue} text={'מועד'} list={duesList} />
            </div>
            {upload &&
                <div className="flex md:flex-row">
                    <Input setInputValue={setMaestro} text={'מרצה'} type={'text'} />
                    <Input setInputValue={setQuestionNum} text={'מספר שאלות'} type={'number'} />
                </div>}
        </div>

    )
}
export default GroupedDDLs