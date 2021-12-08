import H3 from "../../general-components/H3";
import { ThumbUpIcon } from '@heroicons/react/outline';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import TextArea from '../../general-components/TextArea';
import { useState, useEffect } from "react";
import { createCourseComment } from "../../API/commentApi";
import { createTestComment } from '../../API/commentApi';
import { getAllCourseDiscussionComments } from "../../API/courseApi";
import { getAllTestDiscussionsComments } from '../../API/testApi';
import Comments from "./Comments";
import { useParams } from "react-router";

const Discussion = ({ setSelectedDiscussion, selectedDiscussion, type }) => {

    const [description, setDescription] = useState('');
    const [commentsChanged, setCommentsChanged] = useState(false);
    const [comments, setComments] = useState([]);
    const IDs = useParams();


    const pushComment = async () => {
        try {
            let response;
            switch (type) {
                case 'course':
                    response = await createCourseComment({
                        "uid": 1,
                        "did": selectedDiscussion[0].id,
                        "cid": selectedDiscussion[0].cid.trim(),
                        "body": description.trim(),
                        "attachment": ""
                    });
                    break;

                case 'exam':
                    response = await createTestComment({
                        "uid": 1,
                        "did": parseInt(selectedDiscussion[0].id),
                        "tid": parseInt(IDs.examID),
                        "cid": IDs.courseID,
                        "body": description.trim(),
                        "attachment": ""
                    })
                    break;

                case 'question':

                    break;

                default:
                    break;
            }

            if (response.status === 200) {
                setDescription('');
                setCommentsChanged(!commentsChanged);
                console.log(response, selectedDiscussion);
            }
            else if (response.status === 400) {
                alert('לא הצלחתי להוסיף את התגובה שלך. אנא נסה שוב!');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                if (!selectedDiscussion) return;
                let discussion, response, currentComments = [];
                switch (type) {
                    case 'course':
                        response = await getAllCourseDiscussionComments();
                        currentComments = response.data.data.allCourseComments.nodes.filter(a_discussion =>
                            a_discussion.did === selectedDiscussion[0]?.id)
                        break;
                    case 'exam':
                        response = await getAllTestDiscussionsComments()
                        currentComments = response.data.data.allTestComments.nodes.filter(a_discussion =>
                            a_discussion?.did === selectedDiscussion[0]?.id && parseInt(a_discussion?.tid) === parseInt(IDs.examID));
                        break;
                    case 'question':

                        break;

                    default:
                        break;
                }
                setComments(currentComments);
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, [commentsChanged, selectedDiscussion])



    return (
        <div className="relative dark:text-white w-full dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center dark:bg-transparent mb-1 p-3 rounded-xl">
                <H3 text={selectedDiscussion[1] + ". " + selectedDiscussion[0].title} />
                <p onClick={() => setSelectedDiscussion(null)} className="absolute -top-3 text-white -left-3 w-8 h-8 bg-indigo-600 hover:bg-indigo-700 rounded-full text-xl cursor-pointer">&times;</p>
                <p className="text-right mt-3 break-words">{selectedDiscussion[0].body}</p>
                <div className="flex justify-around items-center mt-2">
                    <p dir="ltr" className="font-semibold">@dsadsa</p>
                    <div className="flex items-center">
                        <div className="flex mx-3 justify-between items-center">
                            <ThumbUpIcon className="h-5 w-5" />
                            <p className=" text-md">2</p>
                        </div>
                        <p className="mx-2 text-sm">{(new Date(selectedDiscussion[0].createdAt)).toUTCString().replace("GMT", "")}</p>
                    </div>
                </div>
            </div>
            <Comments comments={comments} />
            <div className="mt-1 flex items-center">
                <TextArea text={'נו תגיב משהו:'} description={description} setDescription={setDescription} rows={2} />
                <div className="">
                    <PaperAirplaneIcon className="h-9 w-9 transform -rotate-90 text-indigo-600 hover:text-indigo-700"
                        onClick={() => pushComment()} />
                </div>
            </div>
        </div>
    )
}
export default Discussion