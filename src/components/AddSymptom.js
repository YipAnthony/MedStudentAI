import React from 'react'

export default function AddSymptom(props) {

    return (
        <div className="dropdown d-flex mt-3">
            
            <textarea 
                className="form-control shadow-none" 
                type="textarea" 
                rows="3"
                id="patientAdditionalSymptom" 
                onChange={props.handleChange} 
                placeholder={"Additional Symptoms: e.g. patient endorses chest pain for 1 week, worsened with exercise, and difficulty breathing" }
                autoComplete="off"
                value={props.selectedSymptomsInput} 
            ></textarea>
            <button 
                className="btn btn-sm btn-primary shadow-none"
                onClick={props.handleSearch}
            >   Search
            </button>
        </div>
    )
}
