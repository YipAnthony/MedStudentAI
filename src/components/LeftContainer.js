import React, {useState} from 'react'
import ChiefComplaint from './ChiefComplaint'
import Age from './Age'
import Gender from './Gender'
import AddSymptom from './AddSymptom'

export default function LeftContainer() {

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [selectedCC, setSelectedCC] = useState("")
    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("")

    let [selectedSymptomsInput, setSelectedSymptomsInput] = useState(["",])
    let [selectedSymptoms, setSelectedSymptoms] = useState(["",])

    let [numberOfSymptoms, setNumberOfSymptoms] = useState(0)

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
            console.log(arrayIndex)
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
        else if (e.target.id === "addSymptom") {
            setNumberOfSymptoms(prev => prev + 1)
            setSelectedSymptomsInput(prev => [...prev,""])
            setSelectedSymptoms(prev => [...prev, ""])
            // console.log(selectedSymptomsInput)
        }
    }

    function selectSymptom(e){
        if (e.target.id === "chiefcomplainSS") {
            let inputChiefComplaint = e.target.innerHTML
            setSelectedCC(()=> inputChiefComplaint)
            setChiefComplaintInput(()=> inputChiefComplaint)
        }
        if (e.target.id === "additionalSymptomSS") {
            let inputSymptom = e.target.innerHTML
            let arrayIndex = e.target.getAttribute('data-array')
            setSelectedSymptoms(prev => {
                let output = [...prev];
                output[arrayIndex] = inputSymptom;
                return output;
            })
            setSelectedSymptomsInput(prev => {
                let output = [...prev];
                output[arrayIndex] = inputSymptom;
                return output;
            })
        }
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
                        selectSymptom = {selectSymptom}
                        selectedCC = {selectedCC}
                    />
                    <AddSymptom
                        selectedSymptomsInput={selectedSymptomsInput}
                        selectedSymptoms={selectedSymptoms}
                        handleChange={handleChange}
                        selectSymptom = {selectSymptom}
                        numberOfSymptoms = {numberOfSymptoms}
                    />
            </div>
        </div>
    )
}
