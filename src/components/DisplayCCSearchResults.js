import React from 'react'
import IndividualSearchResults from './IndividualSearchResults'

export default function DisplayCCSearchResults(props) {
    let {searchResultsCC} = props
    let output = [];
    for (let i = 0; i < searchResultsCC.length; i++) {
        output.push(
            <IndividualSearchResults 
                arrayNumber = {i}
                key = {i}
                searchResults = {searchResultsCC[i]}
                symptomName = {searchResultsCC[i]["name"]}
                handleChange={props.handleChangeCC}
                chiefComplaint={"yes"}
            />
        )
    }

    function handleClick() {
        props.closeCCSearchResults();
        props.toggle();
    }

    let closeButton;
    if (output.length > 0){
        closeButton = <button 
        className="btn btn-sm btn-primary shadow-none"
        onClick={handleClick}
        >Close</button>
    }
    else closeButton = []

    return (
        <div id="ccSearchResultOutput" className="card w-100">
           {output}
           {closeButton}
        </div>
    )
}
