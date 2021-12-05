import H3 from "../../general-components/H3"

const DiscussionsList = ({setIsDiscussionOpen}) => {


    return (
        <div className="dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl h-full">
            <div><H3 text={'דיונים אחרונים'} /></div>
            <div className="pr-3 my-3">
                <ul className="list-disc dark:text-white">
                    <li onClick={()=>setIsDiscussionOpen(true)}>כמה נ"ז הקורס הזה?</li>
                    <li onClick={()=>setIsDiscussionOpen(true)}>מישהו יודע איך כדאי ללמוד לקורס הזה?</li>
                    <li onClick={()=>setIsDiscussionOpen(true)}>קורס חוזר - שווה כדי שהסמסטר יהיה קל יותר?</li>
                </ul>
            </div>
        </div>
    )
}
export default DiscussionsList