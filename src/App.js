import React from 'react';
import MainContainer from './components/MainContainer'


function App() {
  return (
    <div className="container-fluid h-100 windowContainer">
      <img className="appLogo" src={process.env.PUBLIC_URL + "/logo_transparent.png"} alt="logo"></img>
      <MainContainer/>
    </div>
  );
}

export default App;
