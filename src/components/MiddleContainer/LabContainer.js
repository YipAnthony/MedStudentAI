import React, {useState} from 'react'
import TopPanelButtons from './TopPanelButtons'
import DisplayLabOptions from './DisplayLabOptions'

export default function LabContainer(props) {
    return (
        <div>
            <TopPanelButtons categoryMap={props.categoryMap} handleLabCategoryClick={props.handleLabCategoryClick}/>
            <DisplayLabOptions 
                filteredLabs={props.filteredLabs} 
                handleAddLab={props.handleAddLab}    
                />
        </div>
    )
}
