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
        <div id="risksMainContainer" className="card mb-2 hidden">
        <div id="risksSearchContainerTop">
            <h6
                className='card-header'
                onClick={toggle}
            >
                <span className="ml-1">Risk Factors</span>
                <span className="float-right toggleTab" onClick={props.closeRisksSearchResults}>X</span>

                
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
         <div id="risksSearchContainerBottom"></div>
        </div>
    )
}
