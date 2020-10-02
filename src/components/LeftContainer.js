import React, {useState} from 'react'
import ChiefComplaint from './ChiefComplaint'
import AddSymptom from './AddSymptom'
import PatientSymptoms from './PatientSymptoms'
import LabContainer from './MiddleContainer/LabContainer'

import labs from '../lists/labs'

export default function LeftContainer(props) {

    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("male")

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [searchResultsCC, setSearchResultsCC] = useState([])
    let [selectedCC, setSelectedCC] = useState("")
     
    let [selectedSymptomsInput, setSelectedSymptomsInput] = useState("")
    let [searchResults, setSearchResults] = useState([])
    let [patientSymptoms, setPatientSymptoms] = useState([])


    function handleChangeCC(e) {
        let targetIndex = e.target.getAttribute('data-array')
        let selected = searchResultsCC[targetIndex]
        setSelectedCC(() => selected)
        
        setSearchResultsCC(prev => {
            let output = [...prev]
            output = [...output.slice(0,targetIndex), 
                ...output.slice(targetIndex+1)]
            
            return output
        })
    }

    function handleChange(e){
        let input = e.target.value
        if (e.target.id === "selectedAge") {
            setSelectedAge(()=> input)
        }
        else if (e.target.id === "inputGender") {
            input = e.target.innerHTML
            setSelectedGender(prev => {
                if (prev === "male") return "female"
                else return "male"
            })
        }
        else if (e.target.id === "patientCC"){
            setChiefComplaintInput(()=> input)
        }
        else if (e.target.id === "patientAdditionalSymptom"){
            let arrayIndex = e.target.getAttribute('data-array')
            setSelectedSymptomsInput(prev => input)
        }
        else if (e.target.id === "clickAddSymptom") {
            let targetIndex = Number(e.target.getAttribute('data-array'))
            let selected = searchResults[targetIndex]
            setPatientSymptoms(prev => {
                return [...prev, selected]
            })
            setSearchResults(prev => {
                return prev.filter((element, index) => index !== targetIndex)
            })
        }
    }
 
    function handleSearch(e) {
        let arrayIndex; 
        let input;
        let chiefComplaint = false
        if (e.target.id === "searchCCButton") {
            input = ChiefComplaintInput;
            chiefComplaint = true;

            // FAKE DATA FOR NOW
            let jsoncc = [{"id":"s_50","name":"Chest pain","common_name":"Chest pain","orth":"chest pain","choice_id":"present","type":"symptom","positions":[0,1],"head_position":1},{"id":"s_21","name":"Headache","common_name":"Headache","orth":"headache","choice_id":"present","type":"symptom","positions":[3],"head_position":3}]
            setSearchResultsCC(() => jsoncc )
        }
        else {
            // arrayIndex = e.target.getAttribute('data-array')
            input = selectedSymptomsInput
            console.log(input)
            // // FAKE DATA FOR NOW
            let jsonSymptoms = [{"id":"s_50","name":"Chest pain","common_name":"Chest pain","orth":"chest pain","choice_id":"present","type":"symptom","positions":[0,1],"head_position":1},{"id":"s_21","name":"Headache","common_name":"Headache","orth":"headache","choice_id":"present","type":"symptom","positions":[3],"head_position":3},{"id":"s_156","name":"Nausea","common_name":"Feeling sick","orth":"nausea","choice_id":"present","type":"symptom","positions":[5],"head_position":5},{"id":"s_305","name":"Vomiting","common_name":"Vomiting","orth":"vomiting","choice_id":"present","type":"symptom","positions":[7],"head_position":7},{"id":"s_1328","name":"Color vision deficiency","common_name":"Color vision deficiency","orth":"changes vision","choice_id":"present","type":"symptom","positions":[10,9],"head_position":10},{"id":"s_1543","name":"Loss of consciousness","common_name":"Loss of consciousness","orth":"loss of consciousness","choice_id":"present","type":"symptom","positions":[12,13,14],"head_position":12},{"id":"s_88","name":"Dyspnea","common_name":"Shortness of breath","orth":"difficulty breathing","choice_id":"present","type":"symptom","positions":[16,17],"head_position":16}]
            setSearchResults(()=> jsonSymptoms)
        }
        // // DISABLE SEARCH TO LOWER API REQUESTS
        // let parseJSON = {
        //     "text": input,
        //     "context": [
        //         input
        //     ],
        //     "include_tokens": true,
        //     "correct_spelling": true,
        //     "concept_types": [
        //       "symptom"
        //     ]
        //   }
        // fetch("https://api.infermedica.com/v2/parse", {
        //     method: 'POST',
        //     headers: {
        //         "App-Id": "0997c2c7",
        //         "App-Key": "07a4f3f3c41553ca5ea33de3c81114c7",
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(parseJSON),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (!chiefComplaint) jsonToSearchResults(data)
        //     else jsonToSearchResultsCC(data)
        // })
    }
    // // TOGGLED OFF FOR DEVELOPMENT TO LOWER API REQUESTS
    // function jsonToSearchResults (input) {
    //     let resultsArray = input["mentions"]
    //     setSearchResults(()=> resultsArray)
    // }
    // function jsonToSearchResultsCC (input) {
    //     let resultsArray = input["mentions"]
    //     setSearchResultsCC(()=> resultsArray)
    // }

    function deleteSymptom(e){
        let symptom = e.target
        let symptomIndex = Number(symptom.getAttribute('data-array'))
        setPatientSymptoms(prev => {
            return prev.filter((item, index) =>  index !== symptomIndex)
            
        })
    }
    function deleteCC(){
        setSelectedCC(()=> "")
    }

    function closeCCSearchResults() {
        setSearchResultsCC(()=>"")
    }

    function closeSymptomSearchResults(){
        setSearchResults(()=>"")
    }

    let categoryMap = new Map();
    for (let i = 0; i < labs.length; i++) {
       if (!categoryMap.has(labs[i]["category"])) {
        categoryMap.set(labs[i]["category"], 1)
       }
    }
    
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
        let labObject;
        if(e.target.classList.contains('fuzzy')){
            let name = e.target.innerHTML
            labObject = filteredLabs.filter(element => {
                return element['name'] === name;
            })
            labObject = labObject[0]
            console.log(labObject)
        }
        else {
            let targetIndex = Number(e.target.getAttribute('data-index'))
            labObject = filteredLabs[targetIndex]
        }
        
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
        <div className="col-sm border-light">
            <div className="card border-0">
 
                    <PatientSymptoms 
                        patientSymptoms={patientSymptoms}
                        selectedAge = {selectedAge}
                        selectedGender = {selectedGender}
                        selectedCC={selectedCC}
                        deleteSymptom={deleteSymptom}
                        deleteCC={deleteCC}
                        handleChange={handleChange}
                        patientLabs={patientLabs}
                        deleteLab={deleteLab}
                    />
                    <ChiefComplaint
                        ChiefComplaintInput={ChiefComplaintInput} 
                        handleChange={handleChange} 
                        // selectSymptom = {selectSymptom}
                        selectedCC = {selectedCC}
                        handleSearch = {handleSearch}
                        searchResultsCC={searchResultsCC}
                        handleChangeCC={handleChangeCC}    
                        closeCCSearchResults={closeCCSearchResults}
                    />
                    <AddSymptom
                        selectedSymptomsInput={selectedSymptomsInput}
                        // selectedSymptoms={selectedSymptoms}
                        handleChange={handleChange}
                        handleSearch = {handleSearch}
                        searchResults={searchResults}
                        closeSymptomSearchResults={closeSymptomSearchResults}  
                    />
                    <LabContainer
                        handleAddLab={handleAddLab}
                        filteredLabs={filteredLabs}
                        handleLabCategoryClick={handleLabCategoryClick}
                        categoryMap={categoryMap}
                    />
            </div>
        </div>
    )
}
