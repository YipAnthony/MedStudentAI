import React from 'react'

export default function Age(props) {

    let style = "form-control border-0 m-1 p-1 d-inline text-center shadow-none"

    return (
       
            <input 
                className={style}
                style={{width: 50, height: "24px"}} 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                autoComplete="off"
                placeholder={"age"}
                value={props.selectedAge} 
            ></input>
       
    )
}
