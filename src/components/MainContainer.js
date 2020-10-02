import React, {useState} from 'react'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'
import labs from '../lists/labs'

let categoryMap = new Map();
for (let i = 0; i < labs.length; i++) {
   if (!categoryMap.has(labs[i]["category"])) {
    categoryMap.set(labs[i]["category"], 1)
   }
}

export default function MainContainer() {

    let [filteredLabs, setfilteredLabs] = useState(labs)
    function handleLabCategoryClick(e){
        let button = e.target
        for (let i = 0; i < button.parentNode.children.length; i++){
            if (button.parentNode.childNodes[i].classList.contains('active')) {
                button.parentNode.childNodes[i].classList.remove('active')
            }
        }
        button.classList.add('active')
        let selectedButton = e.target.innerHTML
        if (selectedButton === "All") setfilteredLabs(() => labs)
        else {
            let filtered = labs.filter(element => element["category"] === selectedButton)
            setfilteredLabs(() => filtered)
        }
    }

    let [patientLabs, setPatientLabs] = useState([])

    function handleAddLab(e){
        // let target = e.target.innerHTML
        let targetIndex = Number(e.target.getAttribute('data-index'))
        let labObject = filteredLabs[targetIndex]
        setPatientLabs(prev => [...prev, labObject])
    }

    function deleteLab(e){
        let lab = e.target
        // console.log(lab)
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
                // filteredLabs={filteredLabs}
            />
            <MiddleContainer
                handleAddLab={handleAddLab}
                filteredLabs={filteredLabs}
                handleLabCategoryClick={handleLabCategoryClick}
                categoryMap={categoryMap}
            />
            <RightContainer/>
        </div>
    )
}
