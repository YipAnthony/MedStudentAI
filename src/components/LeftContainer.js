import React, {useState, useEffect} from 'react'
import ChiefComplaint from './ChiefComplaint'
import AddSymptom from './AddSymptom'
import PatientSymptoms from './PatientSymptoms'
import LabContainer from './LabContainer/LabContainer'
import RiskFactorContainer from './RiskFactors/RiskFactorContainer'

import labs from '../lists/labs'
import riskFactors from '../lists/riskFactors'

export default function LeftContainer(props) {

    let common = /bmi|hypertension|cholest|cigaret|abdominal injury|skeletal trauma|recent physical|acceleration-decel|back injury|recent head|chest injury|limb injury|pregnancy|postmenopause|diabete|depress/
    let filtered = riskFactors.filter(element => {
        let test = element['name'].toLowerCase()
        return common.test(test)
    })

    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("male")

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [searchResultsCC, setSearchResultsCC] = useState([])
    let [selectedCC, setSelectedCC] = useState("")
     
    let [selectedSymptomsInput, setSelectedSymptomsInput] = useState("")
    let [searchResults, setSearchResults] = useState([])

    let [patientSymptoms, setPatientSymptoms] = useState([])
    let [patientSymptomsAbsent, setPatientSymptomsAbsent] = useState([])

    let [filteredLabs, setfilteredLabs] = useState(labs)
    let [patientLabs, setPatientLabs] = useState([])

    let [filteredRiskFactors, setRiskFactors] = useState(filtered)
    let [patientRiskFactors, setPatientRiskFactors] = useState([])

    useEffect(()=>{
        let input = props.suggestSymptomsResponse
        for (let i = 0; i < input.length; i++){
            if (input[i]['choice_id'] === "present") {
                setPatientSymptoms(prev => {
                    return [
                        ...prev,
                        {
                            ...input[i],
                            "source": "suggest"
                        }
                    ]
                })
            }
            else if (input[i]['choice_id'] === "absent") {
                setPatientSymptomsAbsent(prev => {
                    return [
                        ...prev,
                        {
                            ...input[i],
                            "source": "suggest"
                        }
                    ]
                })
            }
        }
    }, [props.suggestSymptomsResponse])

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
            let testRegex = /^[1][0-1][0-9]$|^[1-9][0-9]$|^[0-9]$|^$/
            if (!testRegex.test(input)) return
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
            setSelectedSymptomsInput(() => input)
        }
        else if (e.target.id === "clickAddSymptom") {
            let targetIndex = Number(e.target.getAttribute('data-array'))
            let selected = searchResults[targetIndex]
            let presentAbsent = e.target.getAttribute('data-present')
            if (presentAbsent === "present") {
                setPatientSymptoms(prev => {
                    return [...prev, selected]
                })
            }
            else if (presentAbsent === "absent") {
                setPatientSymptomsAbsent(prev => {
                    return [...prev, selected]
                })
            }
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
    function deleteSymptomAbsent(e){
        let symptom = e.target
        let symptomIndex = Number(symptom.getAttribute('data-array'))
        setPatientSymptomsAbsent(prev => {
            return prev.filter((item, index) =>  index !== symptomIndex)
            
        })
    }
    function deleteCC(){
        setSelectedCC(()=> "")
    }

    function closeCCSearchResults() {
        setSearchResultsCC(()=>"")
        let container = document.querySelector('#ccSearchContainer')
        container.classList.add('hidden')
    }

    function closeSymptomSearchResults(){
        setSearchResults(()=>"")
        let container = document.querySelector('#symptomsSearchContainer')
        container.classList.add('hidden')
    }

    let categoryMap = new Map();
    for (let i = 0; i < labs.length; i++) {
       if (!categoryMap.has(labs[i]["category"])) {
        categoryMap.set(labs[i]["category"], 1)
       }
    }

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

    function handleAddLab(e){
        let labResult = e.target.innerHTML
        let lab = e.target.parentNode.previousSibling.innerHTML
        let results = filteredLabs.filter(element => {
            return element['name'] === lab
        })[0]['results']
        let id = results.filter(element => {
            return element['type'] === labResult
        })
        let outputObject = {
            "name": lab,
            "id": id[0]["id"],
            "results": [...results],
            "selectedResult": labResult
        }

        setPatientLabs(prev => {
            let arrayIndex = false;
            prev.map((element, index) => {
                if (element["name"] === lab) {
                    arrayIndex = index
                }
                return (arrayIndex)
            })
            if (arrayIndex !== false) {
                let output = [...prev]
                output.splice(arrayIndex, 1, outputObject)
                return output
            }
            else return [...prev, outputObject]
        })
    }

    function selectLabResult(e){
        let button = e.target
        let labName = button.parentNode.previousSibling.innerHTML
        let resultName = button.innerHTML
        let index = patientLabs.map((element, index) => {
            let output;
            if (element['name' === labName]) {
               output = index 
            } 
            return output;
        })
        index = Number(index)
        setPatientLabs(prev => {
            let output = [...prev]
            output[index]['selectedResult'] = resultName
            return output
        })
    }

    function deleteLab(e){
        let lab = e.target
        let labIndex = Number(lab.getAttribute('data-array'))
        setPatientLabs(prev => {
            return prev.filter((item, index) =>  index !== labIndex)
        })
    }

    function handleRiskFactorCategoryClick(e){
        
        let button = e.target
        for (let i = 0; i < button.parentNode.children.length; i++){
            if (button.parentNode.childNodes[i].classList.contains('active')) {
                button.parentNode.childNodes[i].classList.remove('active')
            }
            else button.classList.add('active')
        }

        let selectedButton = e.target.innerHTML
        let regex;
        if (selectedButton === "All") {
            regex = /.*/
        } 
        // setRiskFactors(() => riskFactors)
        else if (selectedButton === "Common") {
            regex = /bmi|hypertension|cholest|cigaret|abdominal injury|skeletal trauma|recent physical|acceleration-decel|back injury|recent head|chest injury|limb injury|pregnancy|postmenopause|diabete|depress/
        }
        else if (selectedButton === "Trauma/Injury") {
            regex = /injury|trauma|wound/
        }
        else if (selectedButton === "Travel") {
            regex = /travel/
        }
        else if (selectedButton === "Cardiac") {
            regex = /cardiac|aortic|aorta|stroke|vascular|cardio|coronary|cholest|myocard|hypertension/
        }
        else if (selectedButton === "Pulmonary") {
            regex = /asthma|pulmonary|ACE-inhibitor|smoking/
        }
        else if (selectedButton === "Drugs/Alcohol/Smoking") {
            regex = /opioid|alcohol|drug|smoking|tobac|cannabis|withdraw|sedative|pill|mushroom/
        }
        else if (selectedButton === "Medications") {
            regex = /anticoagulant|NSAID|corticosteroid|ace-inhibitor|paracetamol|salicylate/
        }
        let filtered = riskFactors.filter(element => {
            let test = element['name'].toLowerCase()
            return regex.test(test)
        })
        setRiskFactors(() => filtered)
        
    }

    function handleAddRiskFactor(e){
        let labObject;
        if(e.target.classList.contains('fuzzy')){
            let name = e.target.innerHTML
            labObject = filteredRiskFactors.filter(element => {
                return element['name'] === name;
            })
            labObject = labObject[0]
        }
        else {
            let targetIndex = Number(e.target.getAttribute('data-index'))
            labObject = filteredRiskFactors[targetIndex]
        }
        let name = labObject["name"]
        setPatientRiskFactors(prev => {
            let arrayIndex = false;
            prev.map((value, index) => {
                if (value["name"] === name) {
                     arrayIndex = index;
                     return arrayIndex
                }
            })
            if (arrayIndex !== false) {

                let output = [...prev]
                output.splice(arrayIndex, 1, labObject)
                return output
            }
            return [...prev, labObject]
        })
    }
    function deleteRiskFactor(e){
        let riskFactor = e.target
        let riskFactorIndex = Number(riskFactor.getAttribute('data-array'))
        setPatientRiskFactors(prev => {
            return prev.filter((item, index) =>  index !== riskFactorIndex)
        })
    }

    function clickCCSearch(e) {
        let ccSearchContainer = document.querySelector('#ccSearchContainer')
        if(ccSearchContainer.classList.contains('hidden')){
            ccSearchContainer.classList.remove('hidden')
        }
    }

    function clickSymptomSearch() {
        let ccSearchContainer = document.querySelector('#symptomsSearchContainer')
        if(ccSearchContainer.classList.contains('hidden')){
            ccSearchContainer.classList.remove('hidden')
        }
    }

    function clickLabsSearch() {
        let container = document.querySelector('#labsMainContainer')
        if(container.classList.contains('hidden')){
            container.classList.remove('hidden')
        }
    }

    function closeLabsSearchResults() {
        let container = document.querySelector('#labsMainContainer')
        container.classList.add('hidden')
    }


    function clickRisksSearch() {
        let container = document.querySelector('#risksMainContainer')
        if(container.classList.contains('hidden')){
            container.classList.remove('hidden')
        }
    }

    function closeRisksSearchResults() {
        let container = document.querySelector('#risksMainContainer')
        container.classList.add('hidden')
    }

    return (
        <div id="patientNoteContainer" className="col-md-7">
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
            <div id="patientMainNote" className="card border-0">
 
                    <PatientSymptoms 
                        patientSymptoms={patientSymptoms}
                        patientSymptomsAbsent={patientSymptomsAbsent}
                        selectedAge = {selectedAge}
                        selectedGender = {selectedGender}
                        selectedCC={selectedCC}
                        deleteSymptom={deleteSymptom}
                        deleteSymptomAbsent={deleteSymptomAbsent}
                        deleteCC={deleteCC}
                        handleChange={handleChange}
                        patientLabs={patientLabs}
                        selectLabResult={selectLabResult}
                        deleteLab={deleteLab}
                        patientRiskFactors={patientRiskFactors}
                        deleteRiskFactor={deleteRiskFactor}
                        jsonOutputToMainContainerState={props.jsonOutputToMainContainerState}
                        updatedResponses={props.updatedResponses}
                        deleteUpdatedResponse={props.deleteUpdatedResponse}
                        clickCCSearch={clickCCSearch}
                        clickSymptomSearch={clickSymptomSearch}
                        clickLabsSearch={clickLabsSearch}
                        clickRisksSearch={clickRisksSearch}
                        
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
                        closeLabsSearchResults={closeLabsSearchResults}
                    />
                    <RiskFactorContainer
                        handleAddRiskFactor={handleAddRiskFactor}
                        filteredRiskFactors={filteredRiskFactors}
                        handleRiskFactorCategoryClick={handleRiskFactorCategoryClick}
                        closeRisksSearchResults={closeRisksSearchResults}
                    />
            </div> 
        </div>
    )
}
