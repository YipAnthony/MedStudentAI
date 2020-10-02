import React, {useState} from 'react'
import LabContainer from './MiddleContainer/LabContainer'
import {toggleUpIcon, toggleDownIcon} from '../icons'


export default function MiddleContainer(props) {

    let [showLabs, setShowLabs] = useState(false)

    function toggle() {
        setShowLabs(prev => !prev)
    }

    return (
        <div className="col-sm order-2">
         <div className="card">
            <h5 
                className='card-header toggleTab'
                onClick={toggle}
            >
                Labs
                {showLabs ? toggleUpIcon: toggleDownIcon}
            </h5>
            {showLabs &&
                <div className="card-body">
                    <LabContainer
                        handleAddLab={props.handleAddLab}
                        filteredLabs={props.filteredLabs}
                        handleLabCategoryClick={props.handleLabCategoryClick}
                        categoryMap={props.categoryMap}
                    />
                </div>
            }
         </div>
        </div>
        
    )
}
