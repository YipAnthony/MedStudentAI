import React from 'react'

export default function PatientSymptoms(props) {

    let output = []
    for (let i = 0; i<props.patientSymptoms.length; i++){
        let input = props.patientSymptoms[i]["name"]
        output.push(
            <button className="btn btn-success btn-sm" key={i}>
                {input}
            </button> 
        )
        console.log(output)
    }
    return (
        <div className="container">
            {output}
        </div>
    )
}
