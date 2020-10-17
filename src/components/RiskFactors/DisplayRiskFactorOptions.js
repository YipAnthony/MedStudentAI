import React, {useState, useEffect} from 'react'
import '../../fuzzyset'
import FuzzySet from '../../fuzzyset'

export default function DisplayRiskFactorOptions(props) {
    let [searchInput, setSearchInput] = useState("")
    let [outputRiskFactors, setOutputRiskFactors] = useState([])

    function handleChange(e) {
        let input = e.target.value
        setSearchInput(() => input)
    }

    useEffect(() => {
        setSearchInput(() => "")
    }, [props.resetSearch])

    useEffect(() => {
        let names = props.filteredRiskFactors.map(element => element["name"])
        let fuzzy = FuzzySet(names)
        let search = searchInput
        if (search !== ""){
            let fuzzyOutput = fuzzy.get(search, null, .05)
            let output = [];
            if (fuzzyOutput){
                fuzzyOutput.forEach((value, index) => {
                    output.push(
                        <div 
                            id="labSearchResult" 
                            data-index={index}
                            className="dropdownItems ml-1 fuzzy border-top border-bottom" 
                            key={index}
                            onClick={props.handleAddRiskFactor}
                        >
                            {value[1]}
                        </div>
                    )
                })
            } 
            setOutputRiskFactors(() => output)
        }
        else {
            let output = [];
            names.forEach((value, index) => {
                output.push(
                    <div 
                        id="labSearchResult" 
                        data-index={index}
                        className="dropdownItems ml-1 border-top border-bottom" 
                        key={index}
                        onClick={props.handleAddRiskFactor}
                    >
                        {value}
                    </div>
                )
            })
            setOutputRiskFactors(() => output)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchInput, props.filteredRiskFactors, props.resetSearch])
    
    function closeSearch() {
        setOutputRiskFactors(() => [])
        props.toggle();
    }

    let closeButton;
    if (outputRiskFactors.length > 0){
        closeButton = <button 
        className="btn btn-sm btn-primary shadow-none closeButtonMargin"
        onClick={closeSearch}
        >Close</button>
    }
    else closeButton = []

    return (
        <div>
            <div className="d-flex">
                <input 
                    className="form-control shadow-none" 
                    type="text" 
                    onChange={handleChange} 
                    placeholder={"Search risk factors"}
                    autoComplete="off"
                    value={searchInput} 
                ></input>
            </div>
            <div id="riskSearchResults" className="card" style={outputRiskFactors.length === 0 ? {height:"0"}:{maxHeight: "10%"}}> 
                {outputRiskFactors}
                
            </div>
        {closeButton}
        </div>
    )
}
