import React from 'react'
import AdditionalSymptoms from './AdditionalSymptoms'

export default function AddSymptom(props) {
    
    let {numberOfSymptoms} = props
    // console.log(numberOfSymptoms)

    let additionalSymptomsArray = [];

    for (let i = 1; i <= numberOfSymptoms; i++) {
        // console.log(i)
        additionalSymptomsArray.push(
            <AdditionalSymptoms 
                arrayNumber = {i}
                key = {i}
                selectedSymptomsInput={props.selectedSymptomsInput[i]}
                selectedSymptoms={props.selectedSymptoms[i]}
                handleChange={props.handleChange}
                selectSymptom = {props.selectSymptom}
            />
        )
    }

    return (
        <div>
            <AdditionalSymptoms 
                arrayNumber = "0"
                selectedSymptomsInput={props.selectedSymptomsInput[0]}
                selectedSymptoms={props.selectedSymptoms[0]}
                handleChange={props.handleChange}
                selectSymptom = {props.selectSymptom}
            />
            {additionalSymptomsArray}
            <button id="addSymptom" className="btn btn-md btn-primary shadow-none" onClick={props.handleChange}>Add Symptom</button>
        </div>
    )
}
