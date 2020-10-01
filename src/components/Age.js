import React from 'react'

export default function Age(props) {
    return (
        <div className="d-flex">
            <input 
                className="form-control w-25" 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                autoComplete="off"
                placeholder={"Age"}
                value={props.selectedAge} 
            ></input>
        </div>
    )
}
