import React from 'react'

export default function IndividualSearchResults(props) {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content">
                <button id="clickAddSymptom" data-array={props.arrayNumber} className="btn btn-primary btn-sm mr-1 shadow-none" onClick={props.handleChange}>Add</button>
                <div className="card-text m-auto ml-1 mr-1">{props.symptomName}</div>
            </div>
        </div>
    )
}
