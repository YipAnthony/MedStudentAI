import React, {useState} from 'react'
import TopPanelButtons from './TopPanelButtons'
import DisplayLabOptions from './DisplayLabOptions'
import {toggleUpIcon, toggleDownIcon} from '../../icons'

export default function LabContainer(props) {

    let [showLabs, setShowLabs] = useState(false)

    function toggle() {
        setShowLabs(prev => !prev)
    }

    return (
        <div>
        <div className="card mb-2">
            <h6
                className='card-header toggleTab'
                onClick={toggle}
            >
                {showLabs ? toggleUpIcon: toggleDownIcon}
                <span className="ml-1">Labs</span>
            </h6>
            {showLabs &&
                <div className="card-body">
            <TopPanelButtons categoryMap={props.categoryMap} handleLabCategoryClick={props.handleLabCategoryClick}/>
            <DisplayLabOptions 
                filteredLabs={props.filteredLabs} 
                toggle={toggle}
                handleAddLab={props.handleAddLab}    
                />
                </div>
            }
         </div>
        </div>
    )
}
