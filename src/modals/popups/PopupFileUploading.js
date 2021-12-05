import { useState } from 'react';
import Button from '../../general-components/Button';
import UploadFile from '../../general-components/UploadFile';
import GroupedDDLs from '../../components/grouped-ddls/GroupedDDLs';

const PopupFileUploading = ({ setTitle }) => {
    setTitle('העלה קובץ')
    const [selectedFile, setSelectedFile] = useState(null);
    const [s3ImageUrl, setS3ImageUrl] = useState(null);

    
    const handleFileInput = (file) => {
        if (file.size > 10000000) {
            alert("file uploading is limited up to 10MB");
            return;
        }
        setSelectedFile(file);
    }
    const uploadFile = async () => {
        const { url } = await fetch("http://localhost:5000/s3Url?folderName=exams").then(ressponse => ressponse.json());
        // console.log("fetched URL from backend", url);
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: selectedFile
        })
        const imageUrl = url.split('?')[0];
        setS3ImageUrl(imageUrl);
        console.log(imageUrl, "image url after uploading");
    }
    
    return (
        <div className="flex flex-col items-center">
            <GroupedDDLs upload={true}/>
            <UploadFile handleFileInput={handleFileInput} />
            <Button text="אישור" clickHandler={uploadFile} />
            {s3ImageUrl != null && <a href={s3ImageUrl}>TRY TO DOWNLOAD THE FILE</a>}
        </div>
    )
}
export default PopupFileUploading;
