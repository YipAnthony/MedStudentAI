import React from 'react'

export default function Gender(props) {
    return (
        
        <div>
            Gender: 
            <button id="inputGender" className="btn btn-outline-primary btn-sm m-1" onClick={props.handleChange}>Male</button>
            <button id="inputGender" className="btn btn-outline-primary btn-sm m-1" onClick={props.handleChange}>Female</button>
        </div>
    )
}
