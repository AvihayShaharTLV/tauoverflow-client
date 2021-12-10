import { useState } from 'react';
import Button from '../../general-components/Button';
import UploadFile from '../../general-components/UploadFile';
import GroupedDDLs from '../../components/grouped-ddls/GroupedDDLs';
import { createTest, createSolution, getAllTests, createExam } from '../../API/testApi';
import { uploadToS3 } from '../../s3-methods/uploadFile';

const PopupFileUploading = ({setNewExamUploaded,newExamUploaded,newSolutionUploaded,setNewSolutionUploaded,setTitle, setIsPopupOpen, popupType }) => {

    let params = window.location.href.split('/').slice(3);
    let courseID, examID;
    if (params[0]) courseID = params[0].split('=')[1];
    if (params[1]) examID = params[1].split('=')[1];

    examID ? setTitle('העלה קובץ') : setTitle('צור מבחן');

    const findSemester = () => {
        let month = new Date().getMonth() + 1;
        switch (month) {
            case 11: case 12: case 1: case 2:
                return 'א';
            case 3: case 4: case 5: case 6:
                return 'ב';
            case 7: case 8: case 9: case 10:
                return 'קיץ';
            default:
                break;
        }
    }

    const [isBTNdisabled, setIsBTNdisabled] = useState(false);

    // file upload data
    const [selectedFile, setSelectedFile] = useState(null);

    // ddls and inputs data
    const [year, setYear] = useState(new Date().getFullYear());
    const [semester, setSemester] = useState(findSemester());
    const [due, setDue] = useState(null);
    const [maestro, setMaestro] = useState(null);
    const [questionNum, setQuestionNum] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [grade, setGrade] = useState(null);
    const [language, setLanguage] = useState(null);

    const handleFileInput = (file) => {
        if (file.size > 5000000) {
            alert("file uploading is limited up to 5MB");
            return;
        }
        setSelectedFile(file);
    }

    const createTests = async () => {
        console.log('creating a test:', year, semester, due, questionNum);
        // make sure all fields are filled
        if (!(year && semester && due && questionNum)) {
            alert("All fields must be filled");
            return;
        }
        const response = await createTest({
            "cid": courseID,
            "year": parseInt(year),
            "questionsNum": parseInt(questionNum), 
            "semester": semester,
            "period": due,
            "pid": 1,
        })
        if (response.status === 200) {
            const response = await getAllTests();
            console.log(response)
            let lastTest = response.data.data.allTests.nodes[response.data.data.allTests.nodes.length - 1];
            window.location.replace(`/course=${courseID.trim()}/exam=${lastTest.id}`);

            // setIsBTNdisabled(false);
            setIsPopupOpen(false);
        }
        else if (response.status === 400) {
            alert('הקובץ לא הועלה כשורה. אנא נסה שוב.')
            // setIsBTNdisabled(false);
        }
    }

    const uploadFile = async () => {
        // setIsBTNdisabled(true);
        // make sure all fields are filled
        if (!(year && semester && due && courseID && selectedFile && fileType)) {
            alert("All fields must be filled");
            return;
        }

        // push exam info with download link
        let response;
        // if type is solution or exam, this means a test is already created. Just upload the specific file
        if (parseInt(fileType) === 0) {
            console.log('uploading a solution');
            response = await createSolution({
                "cid": courseID,
                "pid": 1,
                "downloadLink": await uploadToS3(selectedFile, 'solution'),
                "tid": parseInt(examID),
                "grade": parseInt(grade),
            })
            setNewSolutionUploaded(!newSolutionUploaded);
        }
        else if (parseInt(fileType) === 1) {
            console.log('uploading an exam');
            response = await createExam({
                "cid": courseID,
                "downloadLink": await uploadToS3(selectedFile, 'exam'),
                "pid": 1,
                "tid": parseInt(examID),
                "language": language,
            })
            setNewExamUploaded(!newExamUploaded);
        }
        if (response.status === 200) {
            // setIsBTNdisabled(false);
            // fetch the solutions and tests 
            // rerender them
            setIsPopupOpen(false);
        }
        else if (response.status === 400) {
            alert('הקובץ לא הועלה כשורה. אנא נסה שוב.')
            setIsBTNdisabled(false);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <GroupedDDLs isQuestionNum={examID} language={language} setLanguage={setLanguage} setGrade={setGrade} fileType={fileType} setFileType={setFileType} setYear={setYear} year={year} setSemester={setSemester} semester={semester} setDue={setDue} due={due} setMaestro={setMaestro} setQuestionNum={setQuestionNum} upload={true} popupType={popupType} />
            {examID && <UploadFile handleFileInput={handleFileInput} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />}
            <Button text="אישור" clickHandler={examID ? uploadFile : createTests} disabled={isBTNdisabled} />

        </div>
    )
}
export default PopupFileUploading;
