import React from "react";
import './styles/navbar.css'
import logo from './assets/w.png'


function SocialButton(){

    function SocialInteract(){
            alert('Interactive component not yet done!')
    }
    return(<a onClick={SocialInteract}>
        Social
        </a>);
}

function LeaderboardsButton(){
    function LeadInteract(){
        alert('You are the best player!')
}
return(<a onClick={LeadInteract}>
    Leaderboards
    </a>);
}

function HowToPlayButton(){
    function HowInteract(){
        alert('Guess a five letter word')
}
return(<a onClick={HowInteract}>
    How to Play
    </a>);
}


function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <img className="logo" src={logo} />
                </div>
                <div className="navbar-title">
                    Wordle Clone
                </div>
                <div className="nav-buttons">
                    <div className="leaderboards">
                        <SocialButton  />
                    </div>
                    <div className="social">
                        <LeaderboardsButton  />
                    </div>
                    <div className="howtoplay">
                        <HowToPlayButton  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
