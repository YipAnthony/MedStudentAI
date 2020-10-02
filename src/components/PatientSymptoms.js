import React from 'react'
import Age from './Age'
import Gender from './Gender'

export default function PatientSymptoms(props) {

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
    let selectedLabs = [];
    for (let i = 0; i<props.patientLabs.length; i++){
        let input = props.patientLabs[i]["name"]

        function toggleHidden(e) {
            let xButton = e.target.nextSibling
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden')
            }
            else {
                xButton.classList.add('hidden')
            }
        }
        
        console.log(input)
        selectedLabs.push(
            <span key={i} style={{display: "inline"}}>
                <button className="btn btn-outline-success btn-sm p-1 m-1 mr-0 shadow-none" onClick={toggleHidden}>
                    {input}
                </button> 
                {/* add props.delete labs in higher container */}
                <button data-array={0} className="btn btn-danger btn-sm p-1 m-1 ml-0 shadow-none hidden" onClick={props.deleteLab}>X</button>
            </span>
        )
        console.log(selectedLabs)
    }

    return (
        <div className="card mb-2">
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <h5 className="card-title d-inline">
                    Patient is a 
                    <Age selectedAge={props.selectedAge} handleChange={props.handleChange}/>
                    y/o 
                    <Gender selectedGender={props.selectedGender} handleChange={props.handleChange}/>
                    {props.selectedCC !== "" ? "with a chief complaint of":""}
                    {selectedCCName}
                </h5>
                <p className="card-text">
                    {patientSymptomArray.length > 0 ? "Patient also endorses:":null}
                    {patientSymptomArray}
                </p>
                <p className="card-text">
                    {selectedLabs.length > 0 ? "Relevant labs include:":null}
                    {selectedLabs}
                </p>
            </div>

            
        </div>
    )
}
