import DropDownList from "../../general-components/DropDownList"
import H3 from "../../general-components/H3"
import { PlusCircleIcon } from '@heroicons/react/outline'
import ReactTooltip from "react-tooltip";
import { useParams } from "react-router";

const questions = ['שאלה', 'question', ['1', '2', '3', '4', '5']]

const QuestionSelector = () => {
    const IDs = useParams();
    console.log(IDs)

    return (
        <div>
            <div className="text-center mb-3">
                <H3 text={'מאגר שאלות'} />
            </div>
            <div className="flex items-start justify-center">
                <DropDownList id={questions[1]} list={questions[2]} IDs={IDs}/>
                <PlusCircleIcon data-tip data-for="registerTip" className="focus:outline-none cursor-pointer mt-1.5 h-9 w-9 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                <ReactTooltip id="registerTip" place="bottom" effect="solid">הוסף שאלה</ReactTooltip>
            </div>
        </div>
    )
}
export default QuestionSelector