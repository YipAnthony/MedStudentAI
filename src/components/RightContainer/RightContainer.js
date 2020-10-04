import React from 'react'

export default function RightContainer(props) {

    let differentialArray = [];
    if (props.ddx){
        for (let i = 0; i < props.ddx.length; i++) {
            let percentage = Number(props.ddx[i]["probability"]) * 100
            percentage = Math.round(percentage)
            differentialArray.push(
                <h6 key={i} className="card-text">
                    {props.ddx[i]["name"] + " (" + percentage + "%)"}
                </h6>
            )
        }
    }

    return (
        <div className="col-sm order-3">
            <h5 className="card card-body mt-2">Differential Diagnosis:</h5>
            <div className="card-text p-3" >{differentialArray}</div>
        </div>
    )
}
