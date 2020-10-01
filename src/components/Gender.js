import React from 'react'

export default function Gender(props) {
   
    return (
       
            <button 
                id="inputGender" 
                className={"btn btn-outline-primary btn-md m-1 shadow-none d-inline"}
                onClick={props.handleChange}>
                    {props.selectedGender === "male" ? "male":"female"}
            </button>
           
      
    )
}

