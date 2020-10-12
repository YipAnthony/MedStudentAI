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
                <button className="btn btn-light btn-lg p-0 m-1 mr-0 p shadow-none" onClick={toggleHidden}>
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
            <li key={i} className="listItem">
            <div style={{display: "inline"}}>
                <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteRiskFactor}>X</button>
            </div>
            </li>
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
            <li key={i} className="listItem">
                <div style={{display: "inline"}}>
                    <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                        {input}
                    </button> 
                    <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptom}>X</button>
                </div>
                <br/>
            </li>
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
            <li key={i} className="listItem">
                <div style={{display: "inline"}}>
                    <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                        {input}
                    </button> 
                    <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptomAbsent}>X</button>
                </div>
                <br/>
            </li>
        )
    }
    
    let patientUnknownArray =[]

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
            let choice = props.updatedResponses[i]["choice_id"]
            if (choice === "present") {
                patientSymptomArray.push(
                    <li key={.1*1/i} className="listItem">
                    <div key={.1*1/i} style={{display: "inline"}}>
                        <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                            {input}
                        </button> 
                        <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptom}>X</button>
                    </div>
                    </li>
                )
            }
            else if (choice === "absent") {
                patientSymptomAbsentArray.push(
                    <li key={1/i/10} className="listItem">
                        <div key={1/i} style={{display: "inline"}}>
                            <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                                {input}
                            </button> 
                            <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptomAbsent}>X</button>
                        </div>
                    </li>
                )
            }
            else if (choice === "unknown") {
                patientUnknownArray.push(
                    <li key={i} className="listItem">
                        <div key={1/i} style={{display: "inline"}}>
                            <button className="btn btn-light btn-sm m-0 mr-0 p-0 shadow-none" onClick={toggleHidden}>
                                {input}
                            </button> 
                            <button data-array={i} className="btn btn-danger btn-sm m-1 ml-0 shadow-none hidden" onClick={props.deleteSymptomAbsent}>X</button>
                        </div>
                    </li>
                )
            }
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
                <div key={id} >
                    <button className={testActive(labResult, stateLabResult)} onClick={props.selectLabResult}>
                        {labResult}
                    </button> 
                </div>
            )
        }

        selectedLabs.push(
            <li key={i} className="listItem">
                <div style={{display: "inline"}}>
                    <button className="btn btn-light btn-sm p-0 m-0 mr-0 shadow-none" onClick={toggleHidden}>
                        {input}
                    </button> 
                    <span id="hiddenButtons" data-selectedresult={props.patientLabs[i]['selectedResult']} className="hidden">
                        {labResultType}
                        <button data-array={0} className="btn btn-danger btn-sm p-1 m-1 ml-1 mt-0 shadow-none" onClick={props.deleteLab}>X</button>
                    </span>
                </div>
                <br/>
            </li>
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
        console.log(diagnosisResponse)
        // FAKE DIAGNOSIS RESPONSE FOR TESTING
        if (endpoint === "suggest"){
            props.jsonOutputToMainContainerState(suggestResponse)
        }
        else if (endpoint === "diagnosis") {
            props.jsonOutputToMainContainerState(diagnosisResponse)
        }
        
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
        <div className="mb-2 border-0 mt-2">
            {/* <h3 className="card-header">
                Med Student AI
            </h3> */}
            <div className="border-0 p-3 pl-5 pr-5">
                <h4 className="title d-inline border-0">
                    Patient is a
                    <Age selectedAge={props.selectedAge} handleChange={props.handleChange}/>
                    y/o 
                    <Gender selectedGender={props.selectedGender} handleChange={props.handleChange}/>
                    
                </h4>
                <h5>

                    <strong>Chief Complaint:</strong>
                    {/* {props.selectedCC !== "" ? "Chief complaint: ":""} */}
                    {selectedCCName}
                    <img id="ccSearch" className="ml-1" src="./search.svg" alt="search button" onClick={props.clickCCSearch}></img>

                </h5>
                
                    <p className="text p-0 m-0">
                        <span className="category">Additional Symptoms</span>
                        <img id="ccSearch" className="ml-1" src="./search.svg" alt="search button" onClick={props.clickSymptomSearch}></img>

                    </p>
                    <hr className="m-0"/>
                <div className="row">
                    <div className="col-sm card-text p-0 pl-3 pt-2 text-left">
                        {patientSymptomArray.length > 0 ? "Present:":null}
                        {patientSymptomArray.length > 0 ? <br/>:null}
                        <ul className="text-left list-group">{patientSymptomArray}</ul>
                    </div>
                    <div className="col-sm card-text p-0 pl-3 pt-2 text-left">
                        {patientSymptomAbsentArray.length > 0 ? "Absent:":null}
                        {patientSymptomAbsentArray.length > 0 ? <br/>:null}
                        <div className="text-left">{patientSymptomAbsentArray}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-text p-0 pl-3 pt-2 text-left">
                        <span className="category">Labs</span>
                        <img id="ccSearch" className="ml-1" src="./search.svg" alt="search button" onClick={props.clickLabsSearch}></img>

                        <hr className="m-0"/>
                        <ul className="text-left list-group">{selectedLabs}</ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card-text p-0 pl-3 pt-2 text-left">
                        <span className="category">Risk factors</span>
                        <img id="ccSearch" className="ml-1" src="./search.svg" alt="search button" onClick={props.clickRisksSearch}></img>

                        <hr className="m-0"/>
                        <ul className="text-left list-group">{patientRiskFactorArray}</ul>
                    </div>
                </div>
                <p className="card-text p-2">
                    {patientUnknownArray.length > 0 ? "Patient is unsure:":null}
                    {patientUnknownArray}
                </p>

            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-lg m-2" onClick={() => sendInfoToAPI("suggest")}>Suggest</button>
                <button className="btn btn-success btn-lg m-2" onClick={() => sendInfoToAPI("diagnosis")}>Analyze</button>
            </div>  
        </div>
    )
}
