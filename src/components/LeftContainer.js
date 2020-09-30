import React, {useState} from 'react'
import ChiefComplaint from './ChiefComplaint'
import Age from './Age'
import Gender from './Gender'
import AddSymptom from './AddSymptom'
import DisplaySearchResults from './DisplaySearchResults'
import PatientSymptoms from './PatientSymptoms'

export default function LeftContainer() {

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [selectedCC, setSelectedCC] = useState("")
    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("")

    let [selectedSymptomsInput, setSelectedSymptomsInput] = useState(["",])
    let [selectedSymptoms, setSelectedSymptoms] = useState(["",])

    // let [numberOfSymptoms, setNumberOfSymptoms] = useState(0)

    let[searchResults, setSearchResults] = useState([{"name":"blahblah"}])
    let [patientSymptoms, setPatientSymptoms] = useState([])

    function handleChange(e){
        let input = e.target.value
        if (e.target.id === "selectedAge") {
            setSelectedAge(()=> input)
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
        else if (e.target.id === "inputGender") {
            input = e.target.innerHTML
            setSelectedGender(() => input)
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
        // else if (e.target.id === "addSymptom") {
        //     setNumberOfSymptoms(prev => prev + 1)
        //     setSelectedSymptomsInput(prev => [...prev,""])
        //     setSelectedSymptoms(prev => [...prev, ""])
        //     // console.log(selectedSymptomsInput)
        // }
    }

    // function selectSymptom(e){
    //     if (e.target.id === "chiefcomplainSS") {
    //         let inputChiefComplaint = e.target.innerHTML
    //         setSelectedCC(()=> inputChiefComplaint)
    //         setChiefComplaintInput(()=> inputChiefComplaint)
    //     }
    //     if (e.target.id === "additionalSymptomSS") {
    //         let inputSymptom = e.target.innerHTML
    //         let arrayIndex = e.target.getAttribute('data-array')
    //         setSelectedSymptoms(prev => {
    //             let output = [...prev];
    //             output[arrayIndex] = inputSymptom;
    //             return output;
    //         })
    //         setSelectedSymptomsInput(prev => {
    //             let output = [...prev];
    //             output[arrayIndex] = inputSymptom;
    //             return output;
    //         })
    //     }
    // }


    function handleSearch(e) {
        let arrayIndex = e.target.getAttribute('data-array')
        let input = selectedSymptomsInput[arrayIndex]
        console.log(input)
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
        .then(data => jsonToSearchResults(data))

       
    }

    function jsonToSearchResults (input) {
        let resultsArray = input["mentions"]
        setSearchResults(()=> resultsArray)
        
    }

    return (
        <div className="col-sm border-light">
            <div className="card">
                <div className="card-header">Symptoms</div>
                    <Age selectedAge={selectedAge} handleChange={handleChange}/>
                    <Gender selectedGender={selectedGender} handleChange={handleChange}/>
                    <ChiefComplaint
                        ChiefComplaintInput={ChiefComplaintInput} 
                        handleChange={handleChange} 
                        // selectSymptom = {selectSymptom}
                        selectedCC = {selectedCC}
                    />
                    <AddSymptom
                        selectedSymptomsInput={selectedSymptomsInput}
                        selectedSymptoms={selectedSymptoms}
                        handleChange={handleChange}
                        // selectSymptom = {selectSymptom}
                        // numberOfSymptoms = {numberOfSymptoms}
                        handleSearch = {handleSearch}
                    />
                    <DisplaySearchResults 
                        searchResults={searchResults}
                        handleChange={handleChange}    
                    />

                    <PatientSymptoms patientSymptoms={patientSymptoms}/>
            </div>
        </div>
    )
}
