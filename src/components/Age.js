import React from 'react'

export default function Age(props) {

    let style = "form-control border-primary m-1 p-1 d-inline text-center text-primary shadow-none"

    return (
       
            <input 
                className={style}
                style={{width: 45, height: "24px"}} 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                autoComplete="off"
                placeholder={"Age"}
                value={props.selectedAge} 
            ></input>
       
    )
}
