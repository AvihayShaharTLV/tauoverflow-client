import H3 from "../../general-components/H3"
import Button from "../../general-components/Button"
import GroupedDDLs from "../grouped-ddls/GroupedDDLs";



const ExamFilter = () => {
    return (
        <div className="dark:bg-gray-900 dark:bg-opacity-20 py-3 px-5 rounded-xl">
            <div className="text-center mb-6">
                <H3 text={'סינון מבחנים'} />
            </div>
            <GroupedDDLs/>
            <div className="flex my-2 w-full justify-center">
                <Button text={'סינון'} />
            </div>
        </div>
    )
}
export default ExamFilter