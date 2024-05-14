import React from "react";
import './styles/navbar.css'
import logo from './assets/w.png'


function SocialButton(){

    function SocialInteract(){
            alert('Interactive component not yet done!')
    }
    return(<button onClick={SocialInteract}>
        social
        </button>);
}

function LeaderboardsButton(){
    function LeadInteract(){
        alert('You are the best player!')
}
return(<button onClick={LeadInteract}>
    leaderboards
    </button>);
}

function HowToPlayButton(){
    function HowInterac(){
        alert('Guess a five letter word')
}
return(<button onClick={HowInterac}>
    How to Play
    </button>);
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
