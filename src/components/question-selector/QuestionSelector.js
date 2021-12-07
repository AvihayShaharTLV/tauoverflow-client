import DropDownList from "../../general-components/DropDownList"
import H3 from "../../general-components/H3"
import { PlusCircleIcon } from '@heroicons/react/solid'
import ReactTooltip from "react-tooltip";
import { useParams } from "react-router";
import { useState } from "react";

const questions = ['שאלה', 'question', ['1', '2', '3', '4', '5']]

const QuestionSelector = () => {
    const [questionNum, setQuestionNum] = useState(null);
    const IDs = useParams();
    // console.log(IDs)

    return (
        <div className="mt-3">
            <div className="text-center mb-3">
                <H3 text={'מאגר שאלות'} />
            </div>
            <div className="flex items-start justify-center">
                <DropDownList id={questions[1]} list={questions[2]} IDs={IDs} setObject={setQuestionNum} object={questionNum}/>
                <PlusCircleIcon data-tip data-for="registerTip" className="focus:outline-none cursor-pointer mt-1.5 h-9 w-9 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                <ReactTooltip id="registerTip" place="bottom" effect="solid">הוסף שאלה</ReactTooltip>
            </div>
        </div>
    )
}
export default QuestionSelector