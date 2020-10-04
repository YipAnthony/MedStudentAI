import React, {useState} from 'react'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer/MiddleContainer'
import RightContainer from './RightContainer/RightContainer'
import symptoms from "../lists/symptoms"

export default function MainContainer() {

    let [shouldStop, setShouldStop] = useState("false")
    let [promptQuestions, setPromptQuestions] = useState({})
    let [ddx, setDdx] = useState([])

    let [suggestSymptoms, setSuggestSymptoms] = useState([])

    let [suggestSymptomsResponse, setSuggestSymptomsResponse] = useState([])

    let [updatedResponses, setUpdatedRespones] = useState([])
    
    // function: take JSON ddx conditions and add to main container state        
    // function: take JSON response question obj and add to main container state

    function handleQuestionResponse (e) {
        let questionType = e.target.getAttribute('data-questiontype')
        if (questionType === "groupSingle") {
            let id = e.target.getAttribute('data-id')
            let index = symptoms.filter(element => {
                return element["id"] === id
            })
            let output = {
                "id": id,
                "name": index[0]["name"],
                "source": "interview"
            }
            setUpdatedRespones(prev => {
                return [
                    ...prev,
                    output
                ]
            })
            setPromptQuestions(() => {})
        }
        else if (questionType === "single") {
            let id = e.target.getAttribute('data-id')
            let choiceId = e.target.getAttribute('data-choiceid')
            let name = e.target.getAttribute('data-name')
            // let index = symptoms.filter(element => {
            //     return element["id"] === id
            // })
            let output = {
                "id": id,
                "choice_id": choiceId,
                "name": name,
                "source": "interview"
            }
            setUpdatedRespones(prev => {
                return [
                    ...prev,
                    output
                ]
            })
            setPromptQuestions(() => {})
        }

    }

    function jsonOutputToMainContainerState(object) {
        if(object["conditions"]){
            setDdx (() => object["conditions"]);
            setPromptQuestions(() => object["question"])
            setShouldStop (() => object["should_stop"])
        }
        else if (object[0]["id"]) {
            setSuggestSymptoms(() => object)
        }
    }

    function handleSuggestionResult (e) {
        let index = Number(e.target.parentNode.getAttribute('data-index'))
        let id = e.target.getAttribute('data-id')
        let name = e.target.getAttribute('data-name')
        let choice;
        if (e.target.innerHTML === "Yes") {
            choice = "present"
        }
        else if (e.target.innerHTML === "No") {
            choice = "absent"
        }
        setSuggestSymptomsResponse(() => {
            return [
                {
                    "id": id,
                    "name": name,
                    "choice_id": choice
                }
            ]
        })

        setSuggestSymptoms(prev => {
            let output = [...prev]
            output.splice(index,1)
            return output
        })
    }
    function deleteUpdatedResponse (e) {
        let index = Number(e.target.getAttribute('data-array'))
        setUpdatedRespones(prev => {
            let output = [...prev]
            output.splice(index,1)
            return output
        })
    }
    return (
        <div className="row h-100">
            <LeftContainer
                jsonOutputToMainContainerState={jsonOutputToMainContainerState.bind(this)}
                shouldStop={shouldStop}
                updatedResponses={updatedResponses}
                suggestSymptomsResponse={suggestSymptomsResponse}
                deleteUpdatedResponse = {deleteUpdatedResponse}
            />
            <MiddleContainer
                promptQuestions={promptQuestions}
                handleQuestionResponse={handleQuestionResponse}
                suggestSymptoms={suggestSymptoms}
                handleSuggestionResult={handleSuggestionResult}
            />
            <RightContainer
                ddx={ddx}
            />
        </div>
    )
}
