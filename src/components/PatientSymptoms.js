import React from 'react'

export default function PatientSymptoms(props) {

    let output = []
    for (let i = 0; i<props.patientSymptoms.length; i++){
        let input = props.patientSymptoms[i]["name"]
        output.push(
            <button className="btn btn-success btn-sm m-1" key={i}>
                {input}
            </button> 
        )
        console.log(output)
    }
    let selectedCCName = "";
    if (props.selectedCC) {
        selectedCCName = props.selectedCC.name
    }

    return (
        <div className="card mb-2">
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <h5 className="card-title">
                Patient is a {props.selectedAge ? props.selectedAge + "y/o":"..."} {props.selectedGender.toLowerCase()}
                {props.selectedCC !== "" ? " with a chief complaint of " + selectedCCName:""}
                </h5>
                <p className="card-text">
                    {output.length > 0 ? "Patient also endorses:":null}
                    {output}
                </p>
            </div>

            
        </div>
    )
}
