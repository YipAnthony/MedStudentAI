import React, {useState} from 'react'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'

export default function MainContainer() {

    let [patientLabs, setPatientLabs] = useState([])

    function handleAddLab(e){
        let target = e.target.innerHTML
        setPatientLabs(prev => [...prev, target])
    }

    function deleteLab(e){
        let lab = e.target
        console.log(lab)
        let labIndex = Number(lab.getAttribute('data-array'))
        setPatientLabs(prev => {
            return prev.filter((item, index) =>  index !== labIndex)
        })
    }
    
    return (
        <div className="row h-100">
            <LeftContainer
                patientLabs={patientLabs}
                deleteLab={deleteLab}
            />
            <MiddleContainer
                handleAddLab={handleAddLab}
                patientLabs={patientLabs}
            />
            <RightContainer/>
        </div>
    )
}
