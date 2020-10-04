import React, {useEffect} from 'react'
import Age from './Age'
import Gender from './Gender'

// for testing
import diagnosisResponse from '../lists/diagnosisResponse'
import suggestResponse from '../lists/suggestResponse';

export default function PatientSymptoms(props) {

    let selectedCCName = [];
    if (props.selectedCC) {
        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }
        let input = props.selectedCC.name
        selectedCCName.push(
            <span key={0} style={{display: "inline"}}>
                <button className="btn btn-outline-success btn-md p-1 m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={0} className="btn btn-danger btn-md p-1 m-1 ml-0 shadow-none hidden" onClick={props.deleteCC}>X</button>
            </span>
        )
    }

    let patientRiskFactorArray = []
    for (let i = 0; i<props.patientRiskFactors.length; i++){
        let input = props.patientRiskFactors[i]["name"]

        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }

        patientRiskFactorArray.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-success btn-sm m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteRiskFactor}>X</button>
            </span>
        )
    }

    let patientSymptomArray = []
    for (let i = 0; i<props.patientSymptoms.length; i++){
        let input = props.patientSymptoms[i]["name"]

        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }

        patientSymptomArray.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-success btn-sm m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptom}>X</button>
            </span>
        )
    }

    let patientSymptomAbsentArray = []
    for (let i = 0; i<props.patientSymptomsAbsent.length; i++){
        let input = props.patientSymptomsAbsent[i]["name"]

        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }

        patientSymptomAbsentArray.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-success btn-sm m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptomAbsent}>X</button>
            </span>
        )
    }

    let additionalQuestionResponsesArray = [];
    for (let i =0; i < props.updatedResponses.length; i++) {
        let input = props.updatedResponses[i]["name"]

        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }

        additionalQuestionResponsesArray.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-success btn-sm m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteUpdatedResponse} >X</button>
            </span>
        )
    }

   
    function toggleHidden(e) {
        let buttonContainer = e.target.parentNode.querySelector('#hiddenButtons')
        if (buttonContainer.classList.contains('hidden')) {
            buttonContainer.classList.remove('hidden')
        }
        else buttonContainer.classList.add('hidden')
        let activeButton = buttonContainer.querySelectorAll('button')
        let currentSelectedResult = buttonContainer.getAttribute('data-selectedresult')
        activeButton.forEach(value => {
            if (value.innerHTML === currentSelectedResult) {
                if(!value.classList.contains('active')) {
                    value.classList.add('active')
                }
            }
            else value.classList.remove('active')
        })
    }

    function testActive(a, b) {
        if(a === b) {
            return "btn btn-outline-danger btn-sm p-1 m-1 mr-0 mt-0 active shadow-none"
        }
        else return "btn btn-outline-danger btn-sm p-1 m-1 mr-0 mt-0 shadow-none"
    }

    let selectedLabs = [];
    for (let i = 0; i<props.patientLabs.length; i++){
        let input = props.patientLabs[i]["name"]

        let labResultType =[];
        for (let j = 0; j < props.patientLabs[i]["results"].length; j++){
            let labResult = props.patientLabs[i]["results"][j]["type"]
            let id = props.patientLabs[i]["results"][j]["id"]
            let stateLabResult  = props.patientLabs[i]['selectedResult'] 
            labResultType.push(
                <button key={id} className={testActive(labResult, stateLabResult)} onClick={props.selectLabResult}>
                    {labResult}
                </button> 
            )
        }

        selectedLabs.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-outline-success btn-sm p-1 m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <span id="hiddenButtons" data-selectedresult={props.patientLabs[i]['selectedResult']} className="hidden">
                    {labResultType}
                    <button data-array={0} className="btn btn-danger btn-sm p-1 m-1 ml-1 mt-0 shadow-none" onClick={props.deleteLab}>X</button>
                </span>
                
            </span>
        )
    }

  
    function sendInfoToAPI(endpoint) {
        let output = {
            "sex": props.selectedGender,
            "age": props.selectedAge,
            "evidence": [
                chiefComplaintToJSON(props.selectedCC),
                ...symptomsToJSON(props.patientSymptoms),
                ...symptomsToJSON(props.patientSymptomsAbsent),
                ...symptomsToJSON(props.patientRiskFactors),
                ...labsToJSON(props.patientLabs),
                ...symptomsToJSON(props.updatedResponses)
            ]
        }
        let outputJSON = JSON.stringify(output)
        console.log(outputJSON)
        // // ACTUAL API POST FUNCTIONS
        // let api = "https://api.infermedica.com/v2/"
        // api += endpoint
        // if(endpoint === "suggest") {
        //     api += "?max_results=20"
        // }
        // console.log(api)
        // fetch(api, {
        //     method: 'POST',
        //     headers: {
        //         "App-Id": "0997c2c7",
        //         "App-Key": "07a4f3f3c41553ca5ea33de3c81114c7",
        //         'Content-Type': 'application/json',
        //     },
        //     body: outputJSON,
        // })
        // .then(response => response.json())
        // .then(data => {
        // console.log(data)
        // props.jsonOutputToMainContainerState(data)
        // })
   
        // FAKE DIAGNOSIS RESPONSE FOR TESTING
        props.jsonOutputToMainContainerState(diagnosisResponse)
        // FAKE SUGGEST RESPONSE FOR TESTING
        // props.jsonOutputToMainContainerState(suggestResponse)
    }
    
    function chiefComplaintToJSON (ccStateObject) {
        return {
            "id": ccStateObject['id'],
            "choice_id": "present",
            "source": "initial"
        }
    }

    function symptomsToJSON(symptomsStateArray) {
        let outputArray = []
        let inputArray = symptomsStateArray
        for (let i = 0; i < inputArray.length; i++) {
            let source = "initial"; 
            if (inputArray[i]["source"]) {
                if (inputArray[i]["source"] === "interview"){
                    source = "interview"
                }
                else source = "suggest"
            } 
            let choice = inputArray[i]["choice_id"]
            if (inputArray[i]["category"]) {
                if (inputArray[i]["category"] === "Risk factors") {
                    source = "predefined"
                    choice = "present"
                } 
            }
            if (source === "interview") {
                outputArray.push(
                    {
                        "id": inputArray[i]["id"],
                        "choice_id": choice,
                    }
                )
            }
            else {
                outputArray.push(
                    {
                        "id": inputArray[i]["id"],
                        "choice_id": choice,
                        "source": source
                    }
                )
            }
        }
        return outputArray
    }

    function labsToJSON(labsStateArray) {
        let outputArray = []
        let inputArray = labsStateArray
        for (let i = 0; i < inputArray.length; i++) {
            let result = inputArray[i]["selectedResult"]
            let id;
            inputArray[i]["results"].map(element => {
                if (element["type"] === result) {
                    id = element["id"]
                }
            })
            
            outputArray.push(
                {
                    "id": id,
                    "choice_id": "present"
                }
            )
        }
        return outputArray
    }

    // UPDATE THIS. DO NOT INCLUDE "SOURCE" ATTRIBUTE
 


    return (
        <div className="card mb-2 border-0 mt-2">
            {/* <h3 className="card-header">
                Med Student AI
            </h3> */}
            <div className="card">
                <h5 className="card-title d-inline p-2">
                    Patient is a
                    <Age selectedAge={props.selectedAge} handleChange={props.handleChange}/>
                    y/o 
                    <Gender selectedGender={props.selectedGender} handleChange={props.handleChange}/>
                    {props.selectedCC !== "" ? "with a chief complaint of":""}
                    {selectedCCName}
                </h5>
                <p className="card-text p-2">
                    {patientSymptomArray.length > 0 ? "Patient endorses:":null}
                    {patientSymptomArray}
                </p>
                <p className="card-text p-2">
                    {patientSymptomAbsentArray.length > 0 ? "Patient denies:":null}
                    {patientSymptomAbsentArray}
                </p>
                <p className="card-text p-2">
                    {selectedLabs.length > 0 ? "Relevant labs include:":null}
                    {selectedLabs}
                </p>

                <p className="card-text p-2">
                    {patientRiskFactorArray.length > 0 ? "Risk factors include:":null}
                    {patientRiskFactorArray}
                </p>
                <p className="card-text p-2">
                    {additionalQuestionResponsesArray.length > 0 ? "Additional information:":null}
                    {additionalQuestionResponsesArray}
                </p>

            </div>
            <button className="btn btn-success btn-lg" onClick={() => sendInfoToAPI("suggest")}>Suggest</button>
            <button className="btn btn-success btn-lg" onClick={() => sendInfoToAPI("diagnosis")}>Analyze</button>

        </div>
    )
}
