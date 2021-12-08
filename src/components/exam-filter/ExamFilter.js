import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"
import GroupedDDLs from "../grouped-ddls/GroupedDDLs";
import { useState, useEffect } from "react";
import ExamsList from "../../components/exams-list/ExamsList";
import { getAllTests } from '../../API/testApi';

const ExamFilter = () => {

    const [year, setYear] = useState(null);
    const [semester, setSemester] = useState(null);
    const [due, setDue] = useState(null);
    const [exams, setExams] = useState([]);
    const [viewExams, setViewExams] = useState(false)

    const filterExams = async () => {
        if ((year && year != -1) || (semester && semester != -1) || (due && due != -1)) {
            try {
                if (!viewExams) {
                    setViewExams(!viewExams);
                    const response = await getAllTests();
                    let filteredExams = response?.data?.data?.allTests.nodes || [];
                    if (year && year != -1) {
                        console.log('filtering by year:', parseInt(year));
                        filteredExams = filteredExams.filter(exam => exam.year === parseInt(year));
                    }
                    if (semester && semester != -1) {
                        console.log('filtering by semester: ', semester);
                        filteredExams = filteredExams.filter(exam => exam.semester.trim() === semester);
                    }
                    if (due && due != -1) {
                        console.log('filtering by due:', due);
                        filteredExams = filteredExams.filter(exam => exam.period.trim() === due);
                    }
                    setExams(filteredExams);
                }
                setViewExams(!viewExams);
            }
            catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <div className="dark:bg-gray-900 flex flex-col dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center mb-6">
                <H3 text={'סינון מבחנים'} />
            </div>
            <GroupedDDLs enableNulls={true} year={year} setYear={setYear} semester={semester} setSemester={setSemester} due={due} setDue={setDue} />
            <div className="flex my-2 w-full justify-center">
                {!viewExams && <Button text={'סינון'} clickHandler={filterExams} />}
            </div>
            {viewExams && <ExamsList exams={exams} />}
            <div className="flex items-center justify-center">
                {viewExams && <Button text={'סגור'} clickHandler={filterExams} />}
            </div>

        </div>
    )
}
export default ExamFilter