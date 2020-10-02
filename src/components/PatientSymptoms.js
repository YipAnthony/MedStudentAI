import React from 'react'
import Age from './Age'
import Gender from './Gender'

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
        console.log(input)
        selectedCCName.push(
            <span key={0} style={{display: "inline"}}>
                <button className="btn btn-outline-success btn-md p-1 m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                <button data-array={0} className="btn btn-danger btn-md p-1 m-1 ml-0 shadow-none hidden" onClick={props.deleteCC}>X</button>
            </span>
        )
        console.log(selectedCCName)
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

    function selectLabResult(e) {
        let button = e.target
        for (let i = 0; i < button.parentNode.children.length; i++){
            if (button.parentNode.childNodes[i].classList.contains('active')) {
                button.parentNode.childNodes[i].classList.remove('active')
            }
        }
        button.classList.add('active')

    }
   
    let selectedLabs = [];
    for (let i = 0; i<props.patientLabs.length; i++){
        let input = props.patientLabs[i]["name"]

        function toggleHidden(e) {
            let hiddenButtons = e.target.parentNode.querySelectorAll('button')
            console.log(hiddenButtons)
            hiddenButtons.forEach((button, index) => {
                if(index !== 0) {
                    if (button.classList.contains('hidden')) {
                        button.classList.remove('hidden')
                    }
                    else button.classList.add('hidden')
                }
            })

        }
        
      

        let labResultType =[];
        for (let j = 0; j < props.patientLabs[i]["results"].length; j++){
            let labResult = props.patientLabs[i]["results"][j]["type"]
            let id = props.patientLabs[i]["results"][j]["id"]
            labResultType.push(
                <button key={id} className="btn btn-outline-danger btn-sm p-1 m-1 mr-0 shadow-none hidden" onClick={selectLabResult}>
                    {labResult}
                </button> 
            )
        }

        selectedLabs.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-outline-success btn-sm p-1 m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                {labResultType}
                <button data-array={0} className="btn btn-danger btn-sm p-1 m-1 ml-0 shadow-none hidden" onClick={props.deleteLab}>X</button>
            </span>
        )
    }

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
                    {patientSymptomArray.length > 0 ? "Patient also endorses:":null}
                    {patientSymptomArray}
                </p>
                <p className="card-text p-2">
                    {selectedLabs.length > 0 ? "Relevant labs include:":null}
                    {selectedLabs}
                </p>

                <p className="card-text p-2">
                    {patientRiskFactorArray.length > 0 ? "Risk factors include:":null}
                    {patientRiskFactorArray}
                </p>
            </div>

            
        </div>
    )
}
