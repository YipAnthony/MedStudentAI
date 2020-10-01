import React, {useState} from 'react'
import ChiefComplaint from './ChiefComplaint'
import Age from './Age'
import Gender from './Gender'
import AddSymptom from './AddSymptom'
import DisplaySearchResults from './DisplaySearchResults'
import PatientSymptoms from './PatientSymptoms'
import DisplayCCSearchResults from './DisplayCCSearchResults'

export default function LeftContainer() {

    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("")

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [searchResultsCC, setSearchResultsCC] = useState([{"name":"Chest Pain"}])
    let [selectedCC, setSelectedCC] = useState("")
     
    let [selectedSymptomsInput, setSelectedSymptomsInput] = useState(["",])
    let [searchResults, setSearchResults] = useState([{"name":"Dyspnea"}, {"name":"Chest pain worse on exertion"}, {"name":"Left arm numbness"}])
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
            setSelectedGender(() => input)
        }
        else if (e.target.id === "patientCC"){
            setChiefComplaintInput(()=> input)
        }
        else if (e.target.id === "patientAdditionalSymptom"){
            let arrayIndex = e.target.getAttribute('data-array')
            setSelectedSymptomsInput(prev => {
                let output = [...prev];
                output[arrayIndex] = input;
                return output;
            })
        }
        else if (e.target.id === "clickAddSymptom") {
            let targetIndex = e.target.getAttribute('data-array')
            let selected = searchResults[targetIndex]
            console.log(selected)
            setPatientSymptoms(prev => {
                return [...prev, selected]
            })
            setSearchResults(prev => {
                let output = [...prev]
                output = [...output.slice(0,targetIndex), 
                    ...output.slice(targetIndex+1)]
                
                return output
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
        }
        else {
            arrayIndex = e.target.getAttribute('data-array')
            input = selectedSymptomsInput[arrayIndex]
        }
        let parseJSON = {
            "text": input,
            "context": [
                input
            ],
            "include_tokens": true,
            "correct_spelling": true,
            "concept_types": [
              "symptom"
            ]
          }
        fetch("https://api.infermedica.com/v2/parse", {
            method: 'POST',
            headers: {
                "App-Id": "0997c2c7",
                "App-Key": "07a4f3f3c41553ca5ea33de3c81114c7",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parseJSON),
        })
        .then(response => response.json())
        .then(data => {
            if (!chiefComplaint) jsonToSearchResults(data)
            else jsonToSearchResultsCC(data)
        })
    }

    function jsonToSearchResults (input) {
        let resultsArray = input["mentions"]
        setSearchResults(()=> resultsArray)
    }
    function jsonToSearchResultsCC (input) {
        let resultsArray = input["mentions"]
        setSearchResultsCC(()=> resultsArray)
    }

    return (
        <div className="col-sm border-light">
            <div className="card">
                <div className="card-header">Symptoms</div>
                    <div className= 'd-flex m-2'>
                        <Age selectedAge={selectedAge} handleChange={handleChange}/>
                        <Gender selectedGender={selectedGender} handleChange={handleChange}/>
                    </div>
                    <PatientSymptoms 
                        patientSymptoms={patientSymptoms}
                        selectedAge = {selectedAge}
                        selectedGender = {selectedGender}
                        selectedCC={selectedCC}
                    />
                    <ChiefComplaint
                        ChiefComplaintInput={ChiefComplaintInput} 
                        handleChange={handleChange} 
                        // selectSymptom = {selectSymptom}
                        selectedCC = {selectedCC}
                        handleSearch = {handleSearch}
                    />
                    <DisplayCCSearchResults 
                        searchResultsCC={searchResultsCC}
                        handleChangeCC={handleChangeCC}    
                    />
                    <AddSymptom
                        selectedSymptomsInput={selectedSymptomsInput}
                        // selectedSymptoms={selectedSymptoms}
                        handleChange={handleChange}
                        handleSearch = {handleSearch}
                    />
                    <DisplaySearchResults 
                        searchResults={searchResults}
                        handleChange={handleChange}    
                    />
            </div>
        </div>
    )
}
