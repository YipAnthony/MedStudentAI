import React from 'react'
import LabContainer from './MiddleContainer/LabContainer'

export default function MiddleContainer(props) {
    return (
        <div className="col-sm order-2">
            <LabContainer
                handleAddLab={props.handleAddLab}
            />
        </div>
    )
}
