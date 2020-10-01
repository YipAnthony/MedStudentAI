import React from 'react'
import SymptomsList from './SymptomList'

export default function Symptoms(props) {


    return (
        <div className="d-flex">
            <input 
                className="form-control" 
                type="text" 
                id="patientCC" 
                onChange={props.handleChange} 
                placeholder={"Chief complaint"}
                autoComplete="off"
                value={props.ChiefComplaintInput} 
                // data-toggle="dropdown" aria-haspopup="true"
            ></input>
             <button 
                    id = "searchCCButton"
                    className="btn btn-sm btn-primary shadow-none"
                    data-array = {props.arrayNumber}
                    onClick={props.handleSearch}
                >Search</button>
         </div>
    )
}

