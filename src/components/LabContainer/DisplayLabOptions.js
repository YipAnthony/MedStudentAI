import React, {useState, useEffect} from 'react'
import '../../fuzzyset'
import FuzzySet from '../../fuzzyset'

export default function DisplayLabOptions(props) {
    
    let [searchInput, setSearchInput] = useState("")
    let [outputLabs, setOutputLabs] = useState([])
    let [additionalResults, setadditionalResults] = useState([])
    let [labMatch, setlabMatch] = useState('')

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
                        <div key={index}>
                            <div 
                                id="labSearchResult" 
                                data-index={index}
                                className="dropdownItems ml-1 fuzzy border-top border-bottom" 
                                key={index}
                                onClick={expandLabResults}
                            >
                                {value[1]}
                            </div>
                            {labMatch === value[1]? <div className="d-flex">{additionalResults}</div>:null }
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
                    <div key={index}>
                        <div 
                            id="labSearchResult" 
                            data-index={index}
                            className="dropdownItems ml-1 border-top border-bottom"
                            onClick={expandLabResults}
                        >
                            {value}
                        </div>
                        {labMatch === value? <div className="d-flex">{additionalResults}</div>:null }
                        
                    </div>
                )
            })
            setOutputLabs(() => output)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchInput, props.filteredLabs, additionalResults])
    
    function closeSearch() {
        // setOutputLabs(() => [])
        props.closeLabsSearchResults()
    }

    function expandLabResults(e) {
        let output = []
        let lab = props.filteredLabs.filter(element => {
            return element['name'] === e.target.innerHTML
        })
        let result = lab[0]
        setlabMatch(() => result['name'])
        for (let i = 0; i < result['results'].length; i++){
            output.push(
                <button key={i} className="btn btn-sm btn-outline-danger shadow-none m-1 mb-3" onClick={props.handleAddLab} >
                    {result['results'][i]['type']}
                </button>
            )
        }
        setadditionalResults(() => output)

    }


    let closeButton;
    if (outputLabs.length > 0){
        closeButton = <button 
        className="btn btn-sm btn-primary shadow-none"
        onClick={closeSearch}
        >Close</button>
    }
    else closeButton = []

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
            {/* <button 
                    className="btn btn-sm btn-primary shadow-none"
                    onClick={closeSearch}
                >Close</button> */}
        {closeButton}
        </div>
    )
}
