import React from 'react'
import AdditionalSymptomsList from './AdditionalSymptomsList'

export default function Symptoms(props) {


    return (
        <div className="dropdown">
            Additional Symptoms:
            <input 
                className="form-control" 
                type="text" 
                data-array = {props.arrayNumber}
                id="patientAdditionalSymptom" 
                onChange={props.handleChange} 
                placeholder={"Search"}
                autoComplete="off"
                value={props.selectedSymptomsInput} 
                data-toggle="dropdown" aria-haspopup="true"
            ></input>
            <div id="dropdownSearch" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div id="dropdownItems" className="container">
                    <AdditionalSymptomsList arrayNumber = {props.arrayNumber} selectedSymptomsInput={props.selectedSymptomsInput} selectSymptom = {props.selectSymptom}/>
                </div>
            </div>
         </div>
    )
}

