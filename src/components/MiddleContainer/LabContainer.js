import React, {useState} from 'react'
import TopPanelButtons from './TopPanelButtons'
import DisplayLabOptions from './DisplayLabOptions'
import labs from '../../lists/labs'

let categoryMap = new Map();
for (let i = 0; i < labs.length; i++) {
   if (!categoryMap.has(labs[i]["category"])) {
    categoryMap.set(labs[i]["category"], 1)
   }
}

export default function LabContainer(props) {
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

    return (
        <div>
            <TopPanelButtons categoryMap={categoryMap} handleLabCategoryClick={handleLabCategoryClick}/>
            <DisplayLabOptions 
                filteredLabs={filteredLabs} 
                handleAddLab={props.handleAddLab}    
                />
        </div>
    )
}
