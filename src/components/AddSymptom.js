import React, {useState} from 'react'
import {toggleUpIcon, toggleDownIcon} from '../icons'
import DisplaySearchResults from './DisplaySearchResults'

export default function AddSymptom(props) {

    let [showSymptom, setShowSymptom] = useState(false)

    function toggle() {
        setShowSymptom(prev => !prev)
    }
    return (
        <div className="card mb-2">
            <h6 
                className='card-header toggleTab'
                onClick={toggle}
            >
                {showSymptom ? toggleUpIcon: toggleDownIcon}
                <span className="ml-1">Additional Symptoms</span>
            </h6>
            {showSymptom &&
                <div className="card-body">
                    <div className="dropdown d-flex ">
                        <textarea 
                            className="form-control shadow-none" 
                            type="textarea" 
                            rows="5"
                            id="patientAdditionalSymptom" 
                            onChange={props.handleChange} 
                            placeholder={"Can interpret multiple phrases \nExample: patient endorses chest pain for 1 week, worsened with exercise, and difficulty breathing" }
                            autoComplete="off"
                            value={props.selectedSymptomsInput} 
                        ></textarea>
                    </div>
                    <button 
                            className="btn btn-sm btn-primary shadow-none float-right"
                            onClick={props.handleSearch}
                        >   Search
                        </button>
                    <DisplaySearchResults 
                        searchResults={props.searchResults}
                        toggle={toggle}
                        handleChange={props.handleChange}  
                        closeSymptomSearchResults={props.closeSymptomSearchResults}  
                    />
                </div>
            }
        </div>
    )
}
