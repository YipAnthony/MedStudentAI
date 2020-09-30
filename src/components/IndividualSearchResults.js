import React from 'react'

export default function IndividualSearchResults(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.symptomName}</h5>
                <button id="clickAddSymptom" data-array={props.arrayNumber} className="btn btn-primary btn-sm shadow-none" onClick={props.handleChange}>Add</button>
            </div>
        </div>
    )
}
