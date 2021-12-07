import { useState } from 'react';
import Button from '../../general-components/Button';
import UploadFile from '../../general-components/UploadFile';
import GroupedDDLs from '../../components/grouped-ddls/GroupedDDLs';
import { createTest } from '../../API/testApi';
import { uploadToS3 } from '../../s3-methods/uploadFile';

const PopupFileUploading = ({ setTitle, setIsPopupOpen }) => {
    setTitle('העלה קובץ');

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

    const handleFileInput = (file) => {
        if (file.size > 5000000) {
            alert("file uploading is limited up to 5MB");
            return;
        }
        setSelectedFile(file);
    }

    const uploadFile = async () => {
        // get the course id
        setIsBTNdisabled(true);
        const courseID = window.location.href.split('/').slice(-1)[0]

        // make sure all fields are filled
        console.log(year, semester, due, maestro, questionNum, selectedFile, courseID);
        if (!(year && semester && due && maestro && questionNum && courseID && selectedFile)) {
            alert("All fields must be filled");
            return;
        }

        // push exam info with download link
        const res = await createTest({
            "cid": courseID,
            "year": parseInt(year),
            "semester": semester,
            "period": due,
            "pid": 1,
            "numQuestions": parseInt(questionNum),
            "downloadLink": await uploadToS3(selectedFile, 'exam')
        })
        if (res.status === 200) {
            setIsBTNdisabled(false);
            setIsPopupOpen(false);
        }
        else if(res.status === 400) {
            alert('הקובץ לא הועלה כשורה. אנא נסה שוב.')
            setIsBTNdisabled(false);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <GroupedDDLs setYear={setYear} year={year} setSemester={setSemester} semester={semester} setDue={setDue} due={due} setMaestro={setMaestro} setQuestionNum={setQuestionNum} upload={true} />
            <UploadFile handleFileInput={handleFileInput} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />
            <Button text="אישור" clickHandler={uploadFile} disabled={isBTNdisabled}/>
            {/* {s3ImageUrl != null && <a href={s3ImageUrl}>TRY TO DOWNLOAD THE FILE</a>} */}
        </div>
    )
}
export default PopupFileUploading;
