import React from 'react'

export default function RiskFactorTopPanelButtons(props) {
    let categoriesInput = 
        [
            'BMI',
            'Cardiac',
            'Pulmonary',
            'Trauma/Injury',
            'Medications',
            'Familial',
            'Psychological',
            'Malignancy',
            'Travel',
            'Drugs/Alcohol/Smoking'
        ]
    let categories = []
    categoriesInput.map((value, index) => {
        return categories.push(
            <button 
                key={index} 
                className="btn btn-outline-primary btn-sm m-1 shadow-none" 
                onClick={props.handleRiskFactorCategoryClick}
            >{value}</button>
        )
    })

    return (
        <div className="mb-2">
            <button 
                key={"all"} 
                className="btn btn-outline-primary active btn-sm m-1 shadow-none" 
                onClick={props.handleRiskFactorCategoryClick}
            >All</button>
            {categories}
        </div>
    )
}
