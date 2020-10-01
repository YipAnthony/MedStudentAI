import React, {useState, useEffect} from 'react'
import '../../fuzzyset'
import FuzzySet from '../../fuzzyset'

export default function DisplayLabOptions(props) {
    
    let [searchInput, setSearchInput] = useState("")
    let [outputLabs, setOutputLabs] = useState([])

    function handleChange(e) {
        let input = e.target.value
        setSearchInput(() => input)
    }
    useEffect(() => {
        let names = props.filteredLabs.map(element => element["name"])
        let fuzzy = FuzzySet(names)
        let search = searchInput
        if (search !== ""){
            let fuzzyOutput = fuzzy.get(search, null, .05)
            let output = [];
            if (fuzzyOutput){
                fuzzyOutput.forEach((value, index) => {
                    output.push(
                        <div className="dropdownItems" key={index}>
                            {value[1]}
                        </div>
                    )
                })
            } 
            setOutputLabs(() => output)
        }
        else {
            let output = [];
            names.forEach((value, index) => {
                output.push(
                    <div className="dropdownItems" key={index}>
                        {value}
                    </div>
                )
            })
            setOutputLabs(() => output)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchInput, props.filteredLabs])
    
    function closeSearch() {
        setOutputLabs(() => [])
    }

    return (
        <div>
            <div className="d-flex">
                <input 
                    className="form-control" 
                    type="text" 
                    onChange={handleChange} 
                    placeholder={"Search Labs"}
                    autoComplete="off"
                    value={searchInput} 
                ></input>
                {/* <button 
                    className="btn btn-sm btn-primary shadow-none"
                    onClick={handleSearch}
                >Search</button> */}
            </div>
            <div id="labSearchResults" className="card" style={outputLabs.length === 0 ? {height:"0"}:{height: "max(200px)"}}> 
                {outputLabs}
                
            </div>
            <button 
                    className="btn btn-sm btn-primary shadow-none"
                    onClick={closeSearch}
                >Close</button>
        </div>
    )
}
