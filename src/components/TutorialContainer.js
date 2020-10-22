import React from 'react'

export default function TutorialContainer(props) {

    function toggleTutorial(e) {
        let target = e.target.nextElementSibling
        target.classList.remove('hidden')
        target = e.target
        target.classList.add('hidden')

        let target2 = e.target.nextElementSibling.nextElementSibling
        target2.classList.add('hidden')
    }


    return (
        <div className="tutorialContainer ">
            <div className="insideContainer card m-auto mt-5 p-2">
                <img className="appLogoWelcome" src={process.env.PUBLIC_URL + "/logo_transparent.png"} alt="logo"></img>
                
                <div className="card-title welcomeText p-2">AI Medical Student utilizes the Infermedica API and is designed as a clinical training tool for medical students. </div>
                <button className="btn btn-primary m-auto mt-1 mb-1 shadow-none" onClick={toggleTutorial}>Watch Tutorial</button>
                <div className="d-flex flex-column hidden">
                <div className="m-auto">
                    <iframe
                    className="m-auto videoDimensions"
                    src="https://www.youtube.com/embed/JSxa_Rqi7cE"
                    title="AI Medical Student Tutorial"
                    allowFullScreen>
                    </iframe>
                </div>
                <button className="btn btn-primary enterButton m-auto mt-2 shadow-none" onClick={props.enter}>Enter</button>
                </div>
                
                <button className="btn btn-sm btn-outline enterButton m-auto mt-1 mb-1 shadow-none" onClick={props.enter}>Enter</button>
            </div>
        </div>
    )
}
