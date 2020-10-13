import React from 'react'

export default function Age(props) {

    let style = "form-control border-0 m-0 p-0 d-inline text-center shadow-none"

    return (
       
            <input 
                className={style}
                style={{width: 50, height: "20px"}} 
                id = "selectedAge"
                type="text" 
                onChange={props.handleChange} 
                autoComplete="off"
                placeholder={"Age"}
                value={props.selectedAge} 
            ></input>
       
    )
}
