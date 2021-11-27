import H3 from "../../general-components/H3"

const Discussion = ({setIsDiscussionOpen}) => {

    return(
        <div className="relative dark:text-white dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center pb-1 border-b"><H3 text={'דיון'}/><p onClick={()=>setIsDiscussionOpen(false)} className="absolute top-2 left-2 text-xl cursor-pointer">&times;</p></div>
            <div className="h-72 "></div>
        </div>
    )
}
export default Discussion