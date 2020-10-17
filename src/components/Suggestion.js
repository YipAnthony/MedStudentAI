import React from 'react'

export default function Suggestion(props) {

    let {suggestSymptoms} = props;
    let outputArray = []
    for (let i = 0 ; i < suggestSymptoms.length; i++) {
        outputArray.push(
            <div key={i} data-index={i} className="mb-2">
                <button 
                    data-id={suggestSymptoms[i]["id"]}
                    data-name={suggestSymptoms[i]["name"]}
                    className="btn btn-sm btn-outline-success shadow-none mr-1"
                    onClick={props.handleSuggestionResult}
                    >Yes</button>
                <button 
                    data-id={suggestSymptoms[i]["id"]}
                    data-name={suggestSymptoms[i]["name"]}
                    className="btn btn-sm btn-outline-danger shadow-none"
                    onClick={props.handleSuggestionResult}
                    >No</button>
                {/* <button className="btn btn-sm btn-primary">Unknown</button> */}
                <span 
                    className="ml-1"
                >{suggestSymptoms[i]["name"]}</span>
            </div>
        )
        
    }


    return (
        <div className="card-body addSymptomsDisplay">
            {outputArray.length > 0 ? outputArray:null}
        </div>
    )
}
