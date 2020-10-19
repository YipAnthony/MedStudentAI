import React, {useState} from 'react';
import MainContainer from './components/MainContainer'


function App() {
  let [alertArray, setAlertArray] = useState([])

  let counter2 = 0.0006
  async function triggerAlert() {
    counter2 += 1
    setAlertArray(prev => [
      ...prev,
      <div key={counter2} id={"alert" + counter2} className="alert alert-primary alertStyle fade" role="alert" >
       Added!
      </div>
    ])
    
    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter2}`)
      alert.classList.remove('fade')
      alert.classList.add('dropFromTop')
    }, 100)
    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter2}`)
      alert.classList.add('fade1')
    }, 600)
    setTimeout( () => {
      let alert = document.querySelector(`#alert${counter2}`)
      alert.classList.add('fade')
    }, 1000)
    setTimeout( () => {
      setAlertArray(prev => {
        let output = prev;
        output = output.slice(1)
        setAlertArray(() => output)
      })
    }, 2000)
  }

  return (
    <div className="container-fluid h-100 windowContainer">
      <img className="appLogo" src={process.env.PUBLIC_URL + "/logo_transparent.png"} alt="logo"></img>
      <MainContainer triggerAlert={triggerAlert}/>
      {alertArray}
      
    </div>
  );
}

export default App;
