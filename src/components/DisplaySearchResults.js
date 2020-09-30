import React from 'react'
import IndividualSearchResults from './IndividualSearchResults'

export default function DisplaySearchResults(props) {
    let {searchResults} = props
    let output = [];
    for (let i = 0; i < props.searchResults.length; i++) {
        // console.log(i)
        output.push(
            <IndividualSearchResults 
                arrayNumber = {i}
                key = {i}
                searchResults = {searchResults[i]}
                symptomName = {searchResults[i]["name"]}
                handleChange={props.handleChange}
            />
        )
    }

    return (
        <div className="card w-100">
           {output}
        </div>
    )
}
