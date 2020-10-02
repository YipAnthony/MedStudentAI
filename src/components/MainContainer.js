import React from 'react'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'


export default function MainContainer() {

    return (
        <div className="row h-100">
            <LeftContainer
            />
            <MiddleContainer
                
            />
            <RightContainer/>
        </div>
    )
}
