import React, {useState} from 'react'
import {toggleUpIcon, toggleDownIcon} from '../icons'
import DisplayCCSearchResults from './DisplayCCSearchResults'

export default function Symptoms(props) {

    let [showCC, setShowCC] = useState(false)

    function toggle() {
        setShowCC(prev => !prev)
    }

    return (
        <div className="card">
            <h6 
                className='card-header toggleTab'
                onClick={toggle}
            >
                {showCC ? toggleUpIcon: toggleDownIcon}
                <span className="ml-1">Chief complaint</span>
            </h6>
            {showCC &&
                <div className="card-body">
                    <div className="d-flex">
                        <input 
                            className="form-control" 
                            type="text" 
                            id="patientCC" 
                            onChange={props.handleChange} 
                            placeholder={"e.g. syncope, dyspnea, chest pain..."}
                            autoComplete="off"
                            value={props.ChiefComplaintInput} 
                        ></input>
                        <button 
                                id = "searchCCButton"
                                className="btn btn-sm btn-primary shadow-none"
                                data-array = {props.arrayNumber}
                                onClick={props.handleSearch}
                            >Search</button>
                    </div>
                    <DisplayCCSearchResults 
                        searchResultsCC={props.searchResultsCC}
                        handleChangeCC={props.handleChangeCC}    
                        closeCCSearchResults={props.closeCCSearchResults}
                    />
                </div>
            }
            
            
         </div>
    )
}

