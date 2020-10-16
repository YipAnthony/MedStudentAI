import React, {useState} from 'react'
import RiskFactorTopPanelButtons from './RiskFactorTopPanelButtons'
import DisplayRiskFactorOptions from './DisplayRiskFactorOptions'

import {closeIcon} from '../../icons'

export default function RiskFactorContainer(props) {

    let [showRiskFactors, setShowRiskFactors] = useState(true)

    function toggle() {
        // setShowRiskFactors(prev => !prev)
        props.closeRisksSearchResults()
    }

    return (
        <div id="risksMainContainer" className="card mb-2 hidden">
        <div id="risksSearchContainerTop">
            <h6
                className='card-header'
                // onClick={toggle}
            >
                <span className="ml-1">Risk Factors</span>
                <span className="float-right toggleTab" onClick={props.closeRisksSearchResults}>{closeIcon}</span>

                
            </h6>
            {showRiskFactors &&
                <div className="card-body riskfactorWrapper">
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
