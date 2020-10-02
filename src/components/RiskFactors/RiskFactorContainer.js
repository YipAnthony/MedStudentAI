import React, {useState} from 'react'
import RiskFactorTopPanelButtons from './RiskFactorTopPanelButtons'
import DisplayRiskFactorOptions from './DisplayRiskFactorOptions'

import {toggleUpIcon, toggleDownIcon} from '../../icons'

export default function RiskFactorContainer(props) {

    let [showRiskFactors, setShowRiskFactors] = useState(false)

    function toggle() {
        setShowRiskFactors(prev => !prev)
    }

    return (
        <div>
        <div className="card mb-2">
            <h6
                className='card-header toggleTab'
                onClick={toggle}
            >
                {showRiskFactors ? toggleUpIcon: toggleDownIcon}
                <span className="ml-1">Risk Factors</span>
            </h6>
            {showRiskFactors &&
                <div className="card-body">
            <RiskFactorTopPanelButtons handleRiskFactorCategoryClick={props.handleRiskFactorCategoryClick}/>
            <DisplayRiskFactorOptions 
                filteredRiskFactors={props.filteredRiskFactors} 
                toggle={toggle}
                handleAddRiskFactor={props.handleAddRiskFactor}    
                />
                </div>
            }
         </div>
        </div>
    )
}
