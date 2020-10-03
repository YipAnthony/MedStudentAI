import React, {useState} from 'react'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'


export default function MainContainer() {

    let [shouldStop, setShouldStop] = useState("false")
    let [promptQuestions, setPromptQuestions] = useState({})
    let [ddx, setDdx] = useState([])
    
    // function: take JSON ddx conditions and add to main container state        
    // function: take JSON response question obj and add to main container state

    function jsonOutputToMainContainerState(object) {
        setDdx (() => object["conditions"]);
        setPromptQuestions(() => object["question"])
        setShouldStop (() => object["should_stop"])
    }

    return (
        <div className="row h-100">
            <LeftContainer
                jsonOutputToMainContainerState={jsonOutputToMainContainerState.bind(this)}
                shouldStop={shouldStop}
            />
            <MiddleContainer
                promptQuestions={promptQuestions}
            />
            <RightContainer
                ddx={ddx}
            />
        </div>
    )
}
