import React from 'react'
import SymptomsList from './SymptomList'

export default function Symptoms(props) {


    return (
        <div className="dropdown">
            Chief Complaint:
            <input 
                className="form-control" 
                type="text" 
                id="patientCC" 
                onChange={props.handleChange} 
                placeholder={"Search"}
                autoComplete="off"
                value={props.ChiefComplaintInput} 
                // data-toggle="dropdown" aria-haspopup="true"
            ></input>
            {/* <div id="dropdownSearch" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div id="dropdownItems" className="container">
                    <SymptomsList ChiefComplaintInput={props.ChiefComplaintInput} selectSymptom={props.selectSymptom}/>
                </div>
            </div> */}
         </div>
    )
}

