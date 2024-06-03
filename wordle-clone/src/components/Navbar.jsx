import React from "react";
import './styles/Navbar.css'
import logo from './assets/w.png'
import { Outlet, Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import pfp from '../uploads/defaultpfp.png'



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
                    <Link to="/">
                        <img className="logo" src={logo} />
                    </Link>
                </div>
                <Link to="/" className="navbar-title">
                    Wordle Clone
                </Link>
                {user && (
                    <>
                    <Link to="/Game" className="navbar-title">
                    Wordle Clone
                    </Link>
                    <div className="nav-buttons">
                        <Link className="leaderboards" to="/Leaderboards">
                            Leaderboards
                        </Link>
                        <Link className="social" to="/Social">
                            Social
                        </Link>
                        {/* <Link className="howtoplay" to='/Game' >
                            Game
                        </Link> */}
                        <Link className="navpfp" to={`/Profile`} >
                            <img src={!user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + user.profilepicture}/>
                            <div>{user.username}</div>
                        </Link>
                        <button className="logout" onClick={handleClick}>Log out</button>
                    </div>
                    </>
                )}
                {!user && (
                    <>
                    <Link to="/" className="navbar-title">
                    Wordle Clone
                    </Link>
                    <div className="nav-buttons">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </div>
                    </>
                )}
                
            </div>
        </>
    )
}

export default Navbar
