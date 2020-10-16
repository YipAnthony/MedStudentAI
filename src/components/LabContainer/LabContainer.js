import React, {useState} from 'react'
import TopPanelButtons from './TopPanelButtons'
import DisplayLabOptions from './DisplayLabOptions'
import {closeIcon} from '../../icons'

export default function LabContainer(props) {

    let [showLabs, setShowLabs] = useState(false)

    function toggle() {
        setShowLabs(prev => !prev)
    }

    return (
        <div id="labsMainContainer" className="card mb-2 hidden">
            <div id="labsSearchContainerTop">
                <h6
                    className='card-header'
                    onClick={toggle}
                >
                    <span className="ml-1">Labs</span>
                    <span className="float-right toggleTab" onClick={props.closeLabsSearchResults}>{closeIcon}</span>

                </h6>
                    <div className="card-body">
                <TopPanelButtons categoryMap={props.categoryMap} handleLabCategoryClick={props.handleLabCategoryClick}/>
                <DisplayLabOptions 
                    filteredLabs={props.filteredLabs} 
                    toggle={toggle}
                    handleAddLab={props.handleAddLab}    
                    closeLabsSearchResults={props.closeLabsSearchResults}
                    />
                    </div>
                
            </div>
            <div id="labsSearchContainerBottom"></div>
         </div>
    )
}
