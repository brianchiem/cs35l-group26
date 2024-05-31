import React from "react";
import './styles/Navbar.css'
import logo from './assets/w.png'
import { Outlet, Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// function SocialButton(){

//     function SocialInteract(){
//             alert('Interactive component not yet done!')
//     }
//     return(<a onClick={SocialInteract}>
//         Social
//         </a>);
// }

// function LeaderboardsButton(){
//     function LeadInteract(){
//         alert('You are the best player!')
// }
// return(
//     <Link to="/Leaderboards">
//         Leaderboards
//     </Link>);
// }

function HowToPlayButton(){
    function HowInteract(){
        alert('Guess a five letter word')
}
return(<a onClick={HowInteract}>
    How to Play
    </a>);
}

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <img className="logo" src={logo} />
                </div>
                <Link to="/" className="navbar-title">
                    Wordle Clone
                </Link>
                {user && (
                    <div className="nav-buttons">
                        <Link className="leaderboards" to="/Leaderboards">
                            Leaderboards
                        </Link>
                        <Link className="social" to="/Social">
                            Social
                        </Link>
                        <div className="howtoplay">
                            <HowToPlayButton />
                        </div>
                        <span>{user.username}</span>
                        <button className="logout" onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user && (
                    <div className="nav-buttons">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </div>
                )}
                
            </div>
        </>
    )
}

export default Navbar
