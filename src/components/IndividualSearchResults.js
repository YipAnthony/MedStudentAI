import React from 'react'

export default function IndividualSearchResults(props) {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content">
                <div className="card-text m-auto ml-1 mr-1">{props.symptomName}</div>
                <button id="clickAddSymptom" data-array={props.arrayNumber} className="btn btn-primary btn-sm shadow-none" onClick={props.handleChange}>Add</button>
            </div>
        </div>
    )
}
