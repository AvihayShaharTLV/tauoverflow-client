import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"
import GroupedDDLs from "../grouped-ddls/GroupedDDLs";
import { useState } from "react";
import ExamsList from "../../components/exams-list/ExamsList";


const ExamFilter = () => {

    const [year, setYear] = useState('');
    const [semester, setSemester] = useState(null);
    const [due, setDue] = useState(null);

    const uploadFile = () => {
        console.log(year,semester,due)
        if(!(year && semester && due))
            alert("All fields must be filled")
    }

    return (
        <div className="dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center mb-6">
                <H3 text={'סינון מבחנים'} />
            </div>
            <GroupedDDLs year={year} setYear={setYear} semester={semester} setSemester={setSemester} due={due} setDue={setDue} />
            <div className="flex my-2 w-full justify-center">
                <Button text={'סינון'} clickHandler={uploadFile} />
            </div>
            {true && <ExamsList />}

        </div>
    )
}
export default ExamFilter