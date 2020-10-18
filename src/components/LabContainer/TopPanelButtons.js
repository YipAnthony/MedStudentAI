import React from 'react'
import {starUnfilledIcon, bloodIcon} from '../../icons'

export default function TopPanelButtons(props) {

    let categories = []
    let labFilters = [
        <span className="riskFactorIcons">
            <span className='untargetable centerIcon'>{bloodIcon}</span>
            <span className='untargetable text'>Blood count</span>
        </span>,
        <span className="riskFactorIcons">
            <span className='untargetable centerIcon'>
                <img className ="svgIcon" src={process.env.PUBLIC_URL + "/hormone.png"} alt="Lungs"></img>
            </span>
            <span className='untargetable text'>Hormones</span>
        </span>,
        <span className="riskFactorIcons">
            <span className='untargetable centerIcon'>
                <img className ="svgIcon" src={process.env.PUBLIC_URL + "/germ.svg"} alt="Lungs"></img>
            </span>    
            <span className='untargetable text'>Microbiology</span>
        </span>,
        <span className="riskFactorIcons">
            <span className='untargetable centerIcon'>
                <img className ="svgIcon" src={process.env.PUBLIC_URL + "/biochem.svg"} alt="Lungs"></img>
            </span>
            <span className='untargetable text'>Biochemistry</span>
        </span>]
    labFilters.forEach((value, key) => {
    // props.categoryMap.forEach((value, key) => {
        categories.push(
            <span 
                key={key} 
                className="m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >{value}</span>
        )
    })

    return (
        <div id="labTopButtonsContainer" className="mb-2 riskFactorButtons d-flex">
            <span 
                key={"all"} 
                className="m-1 shadow-none" 
                onClick={props.handleLabCategoryClick}
            >
                <span className="riskFactorIcons active">
                    <span className='untargetable centerIcon'>{starUnfilledIcon}</span>
                    <span className='untargetable text'>All</span>
                </span>
            </span>
            {categories}
        </div>
    )
}
