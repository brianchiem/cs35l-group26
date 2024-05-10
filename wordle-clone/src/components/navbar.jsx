import React from "react";
import './styles/navbar.css'
import logo from './assets/w.png'

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
                        Leaderboards
                    </div>
                    <div className="social">
                        Social
                    </div>
                    <div className="howtoplay">
                        How to Play
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar