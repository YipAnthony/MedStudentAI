import React from 'react'

export default function TopPanelButtons(props) {

    let categories = []
    let labFilters = ["Blood count", "Hormones", "Microbiology", "Biochemistry"]
    labFilters.forEach((value, key) => {
    // props.categoryMap.forEach((value, key) => {
        categories.push(
            <button 
                key={key} 
                className="btn btn-outline-primary btn-sm m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >{value}</button>
        )
    })

    return (
        <div id="labTopButtonsContainer" className="mb-2">
            <button 
                key={"all"} 
                className="btn btn-outline-primary active btn-sm m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >All</button>
            {categories}
        </div>
    )
}
