import React from 'react'
import Suggestion from '../Suggestion';



export default function MiddleContainer(props) {


    function handleClick (e) {
        console.log(e.target)
    }
    // display question w/ responses 
    let questionArray = [];
    if (props.promptQuestions){
        // SINGLE RESPONSE: YES/NO/UNKNOWN
        if (props.promptQuestions['type'] === "single") {
            let buttons = []
            let choices = props.promptQuestions['items'][0]['choices']
            for (let i = 0; i < choices.length; i++) {
                buttons.push(
                    <button 
                        key={i} 
                        data-questiontype="single"
                        data-id={props.promptQuestions["items"][0]["id"]}
                        data-name={props.promptQuestions["items"][0]["name"]}
                        data-choiceid={choices[i]["id"]}
                        className="btn btn-sm btn-warning ml-1 mr-1"
                        onClick={props.handleQuestionResponse}
                    >
                        {choices[i]["label"]}
                    </button>
                )
            }
            questionArray.push(
                <div key={0} id="additionalQuestionText" className="card p-1" >
                    <div 
                        className="card-text" 
                        onClick={handleClick}
                    >
                        {props.promptQuestions["text"]}
                    </div>
                    <div className="card-text">
                        {buttons}
                    </div>
                </div>
            )
        }

        // GROUP-SINGLE RESPONSE: single question, multiple possible responses (can only pick one)
        if (props.promptQuestions['type'] === "group_single"){
            let buttons = []
            let choices = props.promptQuestions['items']
            for (let i = 0; i < choices.length; i++) {
                buttons.push(
                    <p className="m-0 mt-2" key={i} >
                        <button 
                            data-questiontype="groupSingle"
                            data-id={choices[i]["id"]}
                            className="btn btn-sm btn-outline-danger ml-1 mr-1"
                            onClick={props.handleQuestionResponse}
                        >
                            {choices[i]["name"]}
                        </button>
                    </p>
                )
            }
            questionArray.push(
                <div key={0} className="card p-1" >
                    <div 
                        className="card-text" 
                        onClick={handleClick}
                    >
                        {props.promptQuestions["text"]}
                    </div>
                    <div className="card-text">
                        {buttons}
                    </div>
                </div>
            )
        }

        // GROUP-MULTIPLE RESPONSE: one question, multiple responses, can select multiple (like checkbox)
        if (props.promptQuestions['type'] === "group_multiple") {
            let choices = props.promptQuestions['items']
            let checkItems = []
            for (let i = 0; i < choices.length; i++) {
                checkItems.push(
                    <div className="m-0 mt-2" key={i}>
                        <label>
                            <input 
                                type="checkbox" 
                                className="mr-1"
                                data-id={props.promptQuestions["items"][i]["id"]}
                            />
                            {props.promptQuestions["items"][i]["name"]}
                        </label>
                    </div>
                )
            }
            questionArray.push(
                <form onSubmit={props.handleMultipleQuestionResponse} key={0}>
                    <div 
                        className="card-text" 
                        onClick={handleClick}
                    >
                        {props.promptQuestions["text"]}
                    </div>
                    <div className="card-text">
                        {checkItems}
                    </div>
                    <button 
                        // type="button" 
                        className="btn btn-md btn-success mt-2"
                        // onClick={props.handleMultipleQuestionResponse}
                    >Submit</button>

                </form>
                
            )
        }
        
    }

    return (
        <div className="col-sm order-2">
            <h5 className="card card-body mt-2">Additional Questions:</h5>
              
                
            {questionArray.length > 0 ? questionArray: null}
            <Suggestion 
                suggestSymptoms={props.suggestSymptoms}
                handleSuggestionResult={props.handleSuggestionResult}
                />
            
        </div>
        
    )
}
