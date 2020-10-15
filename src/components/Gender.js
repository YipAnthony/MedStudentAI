import React from 'react'

export default function Gender(props) {
   
    return (
       
            <button 
                id="inputGender" 
                className={"btn btn-lg mt-1 shadow-none d-inline color"}
                onClick={props.handleChange}
            >
                    {props.selectedGender === "male" ? "Male":"Female"}
            </button>
           
      
    )
}

