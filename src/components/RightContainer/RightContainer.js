import React, {useState, useEffect} from 'react'
import {questionIcon, closeIcon} from '../../icons'

export default function RightContainer(props) {

    let [supportingEvidence, setSupportingEvidence] = useState([])
    let [conflictingEvidence, setConflictingEvidence] = useState([])
    let [targetDdx, setTargetDdx] = useState("")
    let [toggleEvidence, setToggleEvidence] = useState(false)

    let ddxExplainElement = document.querySelector(".ddxExplainContainer")


    function ddxExplain(e) {
        console.log(e.target.getAttribute('data-id'))
        let id = e.target.getAttribute('data-id')
        let name = e.target.getAttribute('data-name')
        setTargetDdx(() => name)
        let input = JSON.parse(props.jsonObject)
        input = {
            ...input,
            "target": id
        }
        let outputJSON = JSON.stringify(input)
        fetch("https://api.infermedica.com/v2/explain", {
            method: 'POST',
            headers: {
                "App-Id": "0997c2c7",
                "App-Key": "07a4f3f3c41553ca5ea33de3c81114c7",
                'Content-Type': 'application/json',
            },
            body: outputJSON,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setSupportingEvidence (() => data["supporting_evidence"])
            setConflictingEvidence(() => data["conflicting_evidence"])
            setSupportingEvidenceArray(() => [])
            setConflictingEvidenceArray(() => [])
            setToggleEvidence(() => true)
            ddxExplainElement.classList.remove('hidden')
        })
    }
    let [supportingEvidenceArray, setSupportingEvidenceArray] = useState([])
    let [conflictingEvidenceArray, setConflictingEvidenceArray] = useState([])
    useEffect (() => {
        if (toggleEvidence) {
            for (let i = 0; i < supportingEvidence.length; i++) {
                setSupportingEvidenceArray(prev => {
                    return [
                        ...prev,
                            <li key={i} className="evidenceText">{supportingEvidence[i]["name"]}</li>
                    ]
                })
            }
            for (let i = 0; i < conflictingEvidence.length; i++) {
                setConflictingEvidenceArray(prev => {
                    return [
                        ...prev,
                        <li key={i+0.1} className="evidenceText">{conflictingEvidence[i]["name"]}</li>
                    ]
                })
            }
        }
    }, [supportingEvidence, conflictingEvidence, toggleEvidence])

    function closeDdxExplain () {
        ddxExplainElement.classList.add('hidden')
        setToggleEvidence(() => false)
    }
    let differentialArray = [];
    if (props.ddx){
        for (let i = 0; i < props.ddx.length; i++) {
            let percentage = Number(props.ddx[i]["probability"]) * 100
            percentage = Math.round(percentage)
            let color;
            if (percentage > 50) {
                color = "bg-success"
            }
            else if (percentage > 25) {
                color = "bg-warning"
            }
            else color = "bg-danger"
            differentialArray.push(
                <h6 key={i} className="card-text">
                    
                    <span>
                        {props.ddx[i]["name"]}
                        {percentage > 50 ? 
                        <span 
                            className="questionIcon" 
                            data-name={props.ddx[i]["name"]}
                            data-id={props.ddx[i]["id"]} 
                            title="Supporting evidence"
                            onClick={ddxExplain}
                        >
                            <span className="untargetable">{questionIcon}</span>
                        </span> 
                        : null }
                    </span>
                    <div className="progress">
                        <div 
                            className={`progress-bar ` + color} 
                            role = "progressbar" 
                            style = {{width:percentage+"%"}}
                            variant={color} 
                            // aria-valuenow={percentage}
                            >
                            {/* {percentage}% */}
                        </div>
                    </div>
                </h6>
            )
        }
    }

    return (
        <div className="mb-1">
            
            {props.ddx.length>0 ? 
            <div  className="card col-sm order-3 roundedCorners">
                <h5 className="card-body mt-2 pb-0 mb-0">Differential Diagnosis:</h5>
                <div className="ddxExplainContainer card hidden">
                    <div className="ddxExplainTitle card-title">
                        {targetDdx}
                        <span className="float-right toggleTab questionIcon ddquestionIcon" onClick={closeDdxExplain}>{closeIcon}</span>
                    </div>
                    <div className="ddxExplainGrid">
                        <div>
                            <div>Supporting Evidence</div>
                            <ul className="list-group">
                                {supportingEvidenceArray}
                            </ul>
                        </div>
                        <div>
                            <div>Conflicting Evidence</div>
                            <ul className="list-group">
                                {conflictingEvidenceArray}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-text p-3" >{differentialArray}</div>
            </div> 
            : null}
        </div>
    )
}
