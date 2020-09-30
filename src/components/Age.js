import React from 'react'

export default function Age(props) {
    return (
        <div>
            Age: 
            <input 
                className="form-control" 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                placeholder={"Patient Age"}
                value={props.selectedAge} 
            ></input>
        </div>
    )
}
