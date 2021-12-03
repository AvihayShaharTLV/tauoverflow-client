import Discussion from "./Discussion";
import DiscussionsList from './DiscussionsList'
import { useState } from "react";

const Discussions = ({isPopupOpen, setIsPopupOpen}) => {

    const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

    return (
        <div className="flex p-3">
            <div className="flex-col flex-1 w-full m-2 shadow rounded-lg">
                <DiscussionsList setIsDiscussionOpen={setIsDiscussionOpen}/>
            </div>
            {isDiscussionOpen && <div className="flex-col flex-1 w-full m-2 rounded-lg shadow">
                <Discussion setIsDiscussionOpen={setIsDiscussionOpen}/>
            </div>}
        </div>
    )
}
export default Discussions