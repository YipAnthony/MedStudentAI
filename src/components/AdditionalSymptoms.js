import React, {useState} from 'react'
import AdditionalSymptomsList from './AdditionalSymptomsList'

export default function Symptoms(props) {

    return (
        <div className="dropdown">
            Additional Symptoms:
            {/* <div className="d-flex"> */}
                <textarea 
                    className="form-control shadow-none" 
                    type="textarea" 
                    rows="3"
                    data-array = {props.arrayNumber}
                    id="patientAdditionalSymptom" 
                    onChange={props.handleChange} 
                    placeholder={"Search"}
                    autoComplete="off"
                    value={props.selectedSymptomsInput} 
                ></textarea>
                {/* <div id="dropdownSearch" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div id="dropdownItems" className="container">
                        <AdditionalSymptomsList arrayNumber = {props.arrayNumber} selectedSymptomsInput={clickSearch} selectSymptom = {props.selectSymptom}/>
                    </div>
                </div> */}
                <button 
                    className="btn btn-sm btn-primary shadow-none"
                    data-array = {props.arrayNumber}
                    onClick={props.handleSearch}
                >Search</button>
            {/* </div> */}

            
         </div>
    )
}

