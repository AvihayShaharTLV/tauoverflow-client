import DropDownList from "../../general-components/DropDownList"
import H3 from "../../general-components/H3"
import { PlusCircleIcon } from '@heroicons/react/solid'
import ReactTooltip from "react-tooltip";
import { useParams } from "react-router";
import { useState } from "react";


const QuestionSelector = ({ questionsNum, setQuestionSelected, questionSelected }) => {
    
    const IDs = useParams();

    return (
        <div className="mt-3">
            <div className="text-center mb-3">
                <H3 text={'מאגר שאלות'} />
            </div>
            <div className="flex items-start justify-center">
                <DropDownList list={Array.from({length: questionsNum}, (_, i) => i + 1)} IDs={IDs} setObject={setQuestionSelected} object={questionSelected} type={"text"}/>
                <PlusCircleIcon data-tip data-for="registerTip" className="focus:outline-none cursor-pointer mt-1.5 h-9 w-9 text-indigo-600 hover:text-indigo-700" aria-hidden="true" />
                <ReactTooltip id="registerTip" className="text-center" place="bottom" effect="solid">חסרה שאלה?<br></br>לחץ כאן להוספה</ReactTooltip>
            </div>
        </div>
    )
}
export default QuestionSelector