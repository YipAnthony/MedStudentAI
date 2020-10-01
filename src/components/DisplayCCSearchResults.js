import React from 'react'
import IndividualSearchResults from './IndividualSearchResults'

export default function DisplayCCSearchResults(props) {
    let {searchResultsCC} = props
    let output = [];
    for (let i = 0; i < searchResultsCC.length; i++) {
        // console.log(i)
        output.push(
            <IndividualSearchResults 
                arrayNumber = {i}
                key = {i}
                searchResults = {searchResultsCC[i]}
                symptomName = {searchResultsCC[i]["name"]}
                handleChange={props.handleChangeCC}
            />
        )
    }

    return (
        <div id="ccSearchResultOutput" className="card w-100">
           {output}
        </div>
    )
}
