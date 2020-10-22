import React, {useState, useEffect} from 'react'
import Suggestion from '../Suggestion';
import {questionIcon, closeIcon} from '../../icons'



export default function MiddleContainer(props) {



    function handleClick (e) {
    }
    // display question w/ responses 
    let questionArray = [];
    let [rationaleOutput, setRationaleOutput] = useState("")

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
                        className="btn btn-sm btn-primary ml-1 mr-1"
                        onClick={props.handleQuestionResponse}
                    >
                        {choices[i]["label"]}
                    </button>
                )
            }
            questionArray.push(
                <div key={0} id="additionalQuestionText" className="card p-1 noBorder" >
                    <div 
                        className="card-text" 
                        onClick={handleClick}
                    >
                        {props.promptQuestions["text"]}
                        <span className="questionIcon" onClick={rationaleAPI}>{questionIcon}</span>
                    </div>
                    <div id="rationaleOutputElement" className= "hidden card">
                        <div className="float-right questionIcon rationaleQuestion" onClick={closeRationale}>{closeIcon}</div>
                        <div className="card-body p-2 pr-5">{rationaleOutput}</div>
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
                            className="btn btn-sm btn-primary ml-1 mr-1"
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
                        <span className="questionIcon" onClick={rationaleAPI}>{questionIcon}</span>
                    </div>
                    <div id="rationaleOutputElement" className= "hidden card">
                        <div className="float-right questionIcon forceRight" onClick={closeRationale}>{closeIcon}</div>
                        <div className="card-body p-2 pr-5">{rationaleOutput}</div>
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
                        <span className="questionIcon" onClick={rationaleAPI}>{questionIcon}</span>
                    </div>
                    <div id="rationaleOutputElement" className= "hidden card">
                        <div className="float-right questionIcon" onClick={closeRationale}>{closeIcon}</div>
                        <div className="card-body p-2 pr-5">{rationaleOutput}</div>
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
    let [conditionParams, setconditionParams] = useState([])
    let [observationParams, setobservationParams] = useState([])
    let [type, setType] = useState("")

    function rationaleAPI() {
        fetch("https://api.infermedica.com/v2/rationale", {
            method: 'POST',
            headers: {
                "App-Id": "0997c2c7",
                "App-Key": "07a4f3f3c41553ca5ea33de3c81114c7",
                'Content-Type': 'application/json',
            },
            body: props.jsonObject,
        })
        .then(response => response.json())
        .then(data => {
            setconditionParams (() => data['condition_params'])
            setobservationParams (() => data["observation_params"])
            setType (() => data["type"])
            let element = document.querySelector('#rationaleOutputElement')
            element.classList.remove('hidden')
        })
    }


    
    useEffect (() => {
        let conditionParamNameList = "";
        if (conditionParams.length === 0 & observationParams.length === 0) return
        conditionParams.forEach(element => {
            conditionParamNameList += `"${element['name']}"`
        })
        let observationParamNameList = "";
        observationParams.forEach(element => {
            observationParamNameList += `"${element['name']}"`
        })
        if (type === "r0") {
            setRationaleOutput (() => `A negative response to this question reduces the
            probability of ${conditionParamNameList}and other conditions.`)
        }
        else if (type === "r1") {
             setRationaleOutput(() => `This question is asked because ${observationParamNameList}might
             be associated with one or more considered conditions.`)
        }
        else if (type === "r2") {
            setRationaleOutput (() => `A negative response to this question reduces 
            probability of ${conditionParamNameList}and other conditions.`)
        }
        else if (type === "r3") {
            setRationaleOutput (() => `This question helps rule in or 
            out conditions such as ${conditionParamNameList}.`)
        }
        else if (type === "r4") {
            setRationaleOutput (() =>  `This question helps determine whether ${observationParamNameList} 
            might be one of the causes of your symptoms.`)
        }
        else if (type === "r5") {
            setRationaleOutput (() => `This question screens for any recent injury.`)
        }
        else if (type === "r6") {
            setRationaleOutput (() => `This question helps further characterize the ${observationParamNameList}.`)
        }
    }, [conditionParams, observationParams, type])

    function closeRationale(e) {
        e.target.parentNode.parentNode.classList.add('hidden')
    }

    return (
        <div>
            {questionArray.length > 0 ? 
           
            <div className="card col-md m-1 ml-0 mr-0 p-2 roundedCorners">
                <h5 className="card-body mb-0">Additional Questions:</h5>
                {/* <span className="btn btn-sm btn-primary" onClick={rationaleAPI}>Explain</span> */}
               
                {questionArray}
                 
               
            </div>
            : null}
            {props.suggestSymptoms.length>0 ? 
            <div className="card col-md m-1 ml-0 mr-0 p-2 addSymptomsCard roundedCorners">
                <h5 className="card-body">Additional Symptoms:</h5>
                <Suggestion 
                    suggestSymptoms={props.suggestSymptoms}
                    handleSuggestionResult={props.handleSuggestionResult}
                />
            </div>
            : null}
        </div>
    )
}
