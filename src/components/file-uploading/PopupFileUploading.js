import H3 from '../../general-components/H3'
import { useState } from 'react';

const PopupFileUploading = ({ setIsPopupOpen }) => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [s3ImageUrl, setS3ImageUrl] = useState(null);

    const handleFileInput = (file) => {
        setSelectedFile(file.target.files[0]);
    }

    const uploadFile = async (file) => {
        const { url } = await fetch("http://localhost:5000/s3Url").then(ressponse => ressponse.json());
        console.log("fetched URL from backend", url);

        // post the image direclty to the s3 bucket
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: file
        })
        const imageUrl = url.split('?')[0];
        setS3ImageUrl(imageUrl);
        console.log(imageUrl, "image url after uploading");
    }

    return (
        <div className="p-5 dark:bg-black rounded-xl transform -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-1/2 h-1/3 shadow-xl bg-gray-200 z-10">
            <p className="dark:text-white m-1 cursor-pointer" onClick={() => setIsPopupOpen(false)}>&times;</p>
            <H3 text={"Choose file to upload"} />
            <label htmlFor="file-upload" className="relative cursor-pointer dark:bg-gray-900 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>העלה קובץ</span>
                <p>{progress}%</p>
                <input id="file-upload" name="file-upload" type="file" accept="image/*" className="sr-only" onChange={handleFileInput} />
                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
            </label>
            {s3ImageUrl != null && <img src={s3ImageUrl} alt="uploaded image"/>}
            </div>
    )
}
            export default PopupFileUploading;
