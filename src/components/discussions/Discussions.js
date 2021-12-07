import Discussion from "./Discussion";
import DiscussionsList from './DiscussionsList'
import { useState } from "react";


const Discussions = ({discussions}) => {
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);
    
    return (
        <div className="flex flex-col h-screen-1/2 md:flex-row p-3">
            <div className="flex sm:flex-auto m-2 md:w-1 shadow dark:bg-gray-800 rounded-lg">
                <DiscussionsList discussions={discussions} setSelectedDiscussion={setSelectedDiscussion} />
            </div>
            {selectedDiscussion && <div className="flex sm:flex-auto dark:bg-gray-800 m-2 md:w-80 rounded-lg shadow">
                <Discussion selectedDiscussion={selectedDiscussion} setSelectedDiscussion={setSelectedDiscussion} />
            </div>}
        </div>
    )
}
export default Discussions