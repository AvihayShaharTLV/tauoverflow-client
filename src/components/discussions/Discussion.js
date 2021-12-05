import H3 from "../../general-components/H3"
import { ThumbUpIcon } from '@heroicons/react/outline'
import { PaperAirplaneIcon } from '@heroicons/react/solid'
import TextArea from '../../general-components/TextArea'

const Discussion = ({ setSelectedDiscussion, selectedDiscussion }) => {

    const renderReplies = () => {
        if (selectedDiscussion.replies.length == 0)
            return (
                <div className="shadow-md bg-gray-50 dark:bg-gray-700 mx-1 px-3 py-2 rounded-xl my-3">
                    <h1 className="h-12 flex flex-col items-center justify-center">אין תגובות עדיין. אולי תשקול להיות הראשון?</h1>
                </div>)
        return selectedDiscussion.replies.map((reply, index) =>
            <div key={index} className="flex flex-col justify-center shadow bg-gray-50 dark:bg-gray-700 mx-1 px-3 py-2 rounded-xl my-3">
                <p className="mb-4 break-words">{reply.text}</p>
                <div className="flex justify-between items-center mt-2">
                    <p dir="ltr" className="font-semibold">@{reply.user.name.replaceAll(" ", "_")}</p>
                    <div className="flex items-center">
                        <div className="flex mx-3 justify-between items-center">
                            <ThumbUpIcon className="h-5 w-5" />
                            <p className=" text-md">{reply.likes.length}</p>
                        </div>
                        <p className="mx-2 text-sm">{reply.date}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative dark:text-white w-full dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center  dark:bg-transparent mb-1 p-3 rounded-xl">
                <H3 text={selectedDiscussion.id+1 + ". " +selectedDiscussion.title} />
                <p onClick={() => setSelectedDiscussion(null)} className="absolute -top-3 text-white -left-3 w-8 h-8 bg-indigo-600 hover:bg-indigo-700 rounded-full text-xl cursor-pointer">&times;</p>
                <p className="text-right mt-3 break-words">{selectedDiscussion.text}</p>
                <div className="flex justify-around items-center mt-2">
                    <p dir="ltr" className="font-semibold">@{selectedDiscussion.user.name.replaceAll(" ", "_")}</p>
                    <div className="flex items-center">
                        <div className="flex mx-3 justify-between items-center">
                            <ThumbUpIcon className="h-5 w-5" />
                            <p className=" text-md">{selectedDiscussion.likes.length}</p>
                        </div>
                        <p className="mx-2 text-sm">{selectedDiscussion.date}</p>
                    </div>
                </div>
            </div>
            <div className=" max-h-80 scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-100 dark:scrollbar-thumb-gray-500 pl-5 overflow-y-auto rounded-xl">
                {renderReplies()}
            </div>
            <div className="mt-2 flex items-center">
                <TextArea text={'נו תגיב משהו:'} rows={2} />
                <div className="">
                    <PaperAirplaneIcon className="h-9 w-9 transform -rotate-90 text-indigo-600 hover:text-indigo-700 " />
                </div>
            </div>
        </div>
    )
}
export default Discussion