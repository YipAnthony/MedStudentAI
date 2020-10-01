import React from 'react'

export default function Age(props) {
    return (
       
            <input 
                className="form-control border-primary m-1 d-inline text-center text-primary shadow-none"
                style={{width: 60}} 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                autoComplete="off"
                placeholder={"Age"}
                value={props.selectedAge} 
            ></input>
       
    )
}
