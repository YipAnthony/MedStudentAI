import React, {useState} from 'react';
import MainContainer from './components/MainContainer'
import TutorialContainer from './components/TutorialContainer'


function App() {
  let [alertArray, setAlertArray] = useState([])
  let counter = -1
  
  function triggerAlert() {
    counter += 1
    let key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setAlertArray(prev => [
      ...prev,
      <div key={key} id={"alert" + counter} className="alert alert-primary alertStyle fade" role="alert" >
       Added!
      </div>
    ])
    

    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter}`)
      alert.classList.remove('fade')
    }, 100)
    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter}`)
      alert.classList.add('fade1')
    }, 600)
    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter}`)
      alert.classList.add('fade')
    }, 1000)
    setTimeout( () => {
      setAlertArray(prev => {
        let output = prev;
        output = output.slice(1)
        setAlertArray(() => output)
      })
    }, 1001)
  }

  let [tutorial, setTutorial] = useState(true)
  function enter() {
    setTutorial(() => false)
  }

  return (
    <div className="container-fluid h-100 windowContainer">
      {tutorial ? 
      <TutorialContainer enter={enter}/>
      :null}
      {!tutorial ?
        <img className="appLogo" src={process.env.PUBLIC_URL + "/logo_transparent.png"} alt="logo"></img>
      :null}
      {!tutorial ?
        <MainContainer triggerAlert={triggerAlert}/>
      :null}
      {alertArray}
      
    </div>
  );
}

export default App;
