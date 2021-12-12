import { ThumbUpIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState } from "react";
import { getAllUsers } from '../../API/usersApi';

const Comments = ({ comments }) => {

    const elementRef = useRef(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.data.data.allUsers.nodes);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [])

    useEffect(() => {
        elementRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }, [comments]);

    const checkUserName = (id) => {
        let a_user;
        users.forEach(user => {if(user.id === id) a_user = user});
        return `${a_user.firstname}_${a_user.lastname}`

    }

    const renderReplies = (comments) => {
        if (comments.length === 0)
            return (
                <div className="shadow-md bg-gray-50 dark:bg-gray-700 mx-1 px-3 py-2 rounded-xl my-3">
                    <h1 className="h-12 flex flex-col items-center justify-center">אין תגובות עדיין. אולי תשקול להיות הראשון?</h1>
                </div>)
        return comments.map((comment, index) =>
            <div key={index} className="flex flex-col justify-center shadow bg-gray-50 dark:bg-gray-700 mx-1 px-3 py-2 rounded-xl my-3">
                <p className="mb-4 break-words">{comment.body}</p>
                <div className="flex justify-between items-center mt-2">
                    {/* <p dir="ltr" className="font-semibold">@{comment.user.name.replaceAll(" ", "_")}</p> */}
                    <p dir="ltr" className="font-semibold">@{checkUserName(comment.uid)}</p>
                    <div className="flex items-center">
                        {/* <div className="flex mx-3 justify-between items-center">
                            <ThumbUpIcon className="h-5 w-5" />
                            <p className=" text-md">{4}</p>
                        </div> */}
                        <p className="mx-2 text-sm">{(new Date(comment.createdAt)).toUTCString().replace("GMT", "")}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-h-xs scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-100 dark:scrollbar-thumb-gray-500 pl-5 overflow-y-auto rounded-xl">
            {renderReplies(comments)}
            <div ref={elementRef} />
        </div>
    )
}
export default Comments