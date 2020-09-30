import React, {useState} from 'react'
import ChiefComplaint from './ChiefComplaint'
import Age from './Age'
import Gender from './Gender'

export default function LeftContainer() {

    let [ChiefComplaintInput, setChiefComplaintInput] = useState("")
    let [selectedCC, setSelectedCC] = useState("")
    let [selectedAge, setSelectedAge] = useState("")
    let [selectedGender, setSelectedGender] = useState("")

    function handleChange(e){
        let input = e.target.value
        if (e.target.id === "selectedAge") {
            setSelectedAge(()=> input)
        }
        else if (e.target.id === "patientCC"){
            setChiefComplaintInput(()=> input)
        }
        else if (e.target.id === "inputGender") {
            input = e.target.innerHTML
            setSelectedGender(() => input)
        }

    }

    function selectSymptom(e){
        console.log(e.target)
        let inputChiefComplaint = e.target.innerHTML
        setSelectedCC(()=> inputChiefComplaint)
        setChiefComplaintInput(()=> inputChiefComplaint)
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
            </div>
        </div>
    )
}
