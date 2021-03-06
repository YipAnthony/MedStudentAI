import React, {useState} from 'react'
import {closeIcon} from '../icons'
import DisplaySearchResults from './DisplaySearchResults'

export default function AddSymptom(props) {

    // eslint-disable-next-line no-unused-vars
    let [showSymptom, setShowSymptom] = useState(false)

    function toggle() {
        setShowSymptom(prev => !prev)
    }
    return (
        <div id="symptomsSearchContainer" className="card mb-2 hidden">
            <div id="symptomsSearchContainerTop">
                <h6 
                    className='card-header'
                    onClick={toggle}
                >
                    <span className="ml-1">Additional Symptoms</span>
                    <span className="float-right toggleTab questionIcon" onClick={props.closeSymptomSearchResults}>{closeIcon}</span>

                </h6>
                    <div className="card-body">
                        <div className="dropdown d-flex ">
                            <textarea 
                                className="form-control shadow-none" 
                                type="textarea" 
                                rows="5"
                                id="patientAdditionalSymptom" 
                                onChange={props.handleChange} 
                                placeholder={'Example: \n"Patient endorses chest pain for 1 week, worsened with exercise, and difficulty breathing"' }
                                autoComplete="off"
                                value={props.selectedSymptomsInput} 
                            ></textarea>
                        </div>
                        <button 
                                id="addSymptomsearch"
                                className="btn btn-sm btn-primary shadow-none float-right mb-2"
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
                
            </div>
            <div id="symptomsSearchContainerBottom"></div>
        </div>
    )
}
