import React from 'react'
import {cardiacIcon, starIcon} from '../../icons'

export default function RiskFactorTopPanelButtons(props) {
    let categoriesInput = 
        [
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>{cardiacIcon}</span>
                <span className='untargetable text'>Cardiac</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>
                    <img className ="svgIcon" src={process.env.PUBLIC_URL + "/lungs.svg"} alt="Lungs"></img>
                </span>
                <span className='untargetable text'>Pulmonary</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>
                    <img className ="svgIcon" src={process.env.PUBLIC_URL + "/injury.svg"} alt="Lungs"></img>
                </span>
                <span className='untargetable text'>Trauma</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>
                    <img className ="svgIcon" src={process.env.PUBLIC_URL + "/medical-pill.svg"} alt="Lungs"></img>
                </span>
                <span className='untargetable text'>Medications</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>
                    <img className ="svgIcon" src={process.env.PUBLIC_URL + "/airplane.svg"} alt="Lungs"></img>
                </span>
                <span className='untargetable text'>Travel</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>
                    <img className ="svgIcon" src={process.env.PUBLIC_URL + "/syringe.svg"} alt="Lungs"></img>
                </span>
                <span className='untargetable text'>Substances</span>
            </span>,
            <span className="riskFactorIcons">
                <span className='untargetable centerIcon'>{cardiacIcon}</span>
                <span className='untargetable text'>All</span>
            </span>
        ]
    let categories = []
    categoriesInput.map((value, index) => {
        return categories.push(
            <span 
                key={index} 
                className="m-1 shadow-none" 
                onClick={props.handleRiskFactorCategoryClick}
            >{value}</span>
        )
    })

    return (
        <div className="mb-2 riskFactorButtons d-flex">
            <span 
                key={"Common"} 
                className="m-1 shadow-none" 
                onClick={props.handleRiskFactorCategoryClick}
            >
                <span className="riskFactorIcons highlight">
                    <span className='untargetable centerIcon'>{starIcon}</span>
                    <span className='untargetable text'>Common</span>
                </span>
            </span>
            {categories}
        </div>
    )
}
