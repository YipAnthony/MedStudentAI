import React, {useState} from 'react'
import {toggleUpIcon, toggleDownIcon} from '../icons'

export default function Symptoms(props) {

    let [showCC, setShowCC] = useState(false)

    function toggle() {
        setShowCC(prev => !prev)
    }

    return (
        <div className="card">
            <h5 
                className='card-header toggleTab'
                onClick={toggle}
            >
                Chief complaint
                {showCC ? toggleUpIcon: toggleDownIcon}
            </h5>
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
                </div>
            }
         </div>
    )
}

