import React from 'react'

export default function IndividualSearchResults(props) {

 
    return (
        <div className="card">
            <div id="individualSymptomSearchResult" className="card-body d-flex justify-content">
                <div className="card-text mt-0 mb-0 ml-1 mr-1">{props.symptomName}</div>
            </div>
            <div id="individualSymptomSearchResult" className="card-body d-flex justify-content">
                <button id="clickAddSymptom" data-array={props.arrayNumber} data-present="present" className="btn btn-primary btn-sm mr-1 shadow-none" onClick={props.handleChange}>Present</button>
                <button id="clickAddSymptom" data-array={props.arrayNumber} data-present="absent" className="btn btn-primary btn-sm mr-1 shadow-none" onClick={props.handleChange}>Absent</button>
            </div>
        </div>
    )
}
