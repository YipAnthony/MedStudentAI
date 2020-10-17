import React from 'react'

export default function IndividualSearchResults(props) {

    function toggle(e){
        let buttons = e.target.parentNode.lastElementChild

        if (buttons.classList.contains('hidden')) {
            buttons.classList.remove('hidden')
        }
        else buttons.classList.add('hidden')
    }
    
    return (
        <div className="card">
            <div id="individualSymptomSearchResult" className="card-body d-flex justify-content" onClick={toggle}> 
                <div className="card-text mt-0 mb-0 ml-1 mr-1 notarget">{props.symptomName}</div>
            </div>
            <div id="searchResultButtons" className="card-body d-flex pt-0 pb-1 justify-content hidden">
                <button id="clickAddSymptom" data-array={props.arrayNumber} data-present="present" className="btn btn-primary btn-sm mr-1 shadow-none " onClick={props.handleChange}>Present</button>
                {props.chiefComplaint === "yes" ? null:
                <button id="clickAddSymptom" data-array={props.arrayNumber} data-present="absent" className="btn btn-primary btn-sm mr-1 shadow-none " onClick={props.handleChange}>Absent</button>
                }
            </div>
        </div>
    )
}
