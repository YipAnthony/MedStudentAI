import React from 'react'

export default function TopPanelButtons(props) {

    let categories = []
    props.categoryMap.forEach((value, key) => {
        categories.push(
            <button 
                key={key} 
                className="btn btn-outline-primary btn-sm m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >{key}</button>
        )
    })

    return (
        <div className="mb-2">
            <button 
                key={"all"} 
                className="btn btn-outline-primary active btn-sm m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >All</button>
            {categories}
        </div>
    )
}
