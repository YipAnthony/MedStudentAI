import React, {useState} from 'react'
import {toggleUpIcon, toggleDownIcon} from '../icons'

export default function AddSymptom(props) {

    let [showSymptom, setShowSymptom] = useState(false)

    function toggle() {
        setShowSymptom(prev => !prev)
    }
    return (
        <div className="card">
            <h5 
                className='card-header toggleTab'
                onClick={toggle}
            >
                Additional Symptoms
                {showSymptom ? toggleUpIcon: toggleDownIcon}
            </h5>
            {showSymptom &&
                <div className="card-body">
                    <div className="dropdown d-flex mt-3">
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
                        <button 
                            className="btn btn-sm btn-primary shadow-none"
                            onClick={props.handleSearch}
                        >   Search
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
