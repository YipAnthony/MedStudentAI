import React from 'react'

export default function RightContainer(props) {

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
                    {props.ddx[i]["name"]}
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
                <div className="card-text p-3" >{differentialArray}</div>
            </div> 
            : null}
        </div>
    )
}
