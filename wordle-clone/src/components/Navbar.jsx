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
                        <div className="logo">W</div>
                    </Link>
                </div>
                <Link to="/" className="navbar-title">
                <div className="logo-remake-container">
                            <div className="logo-remake">
                                <div>W</div>
                                <div>O</div>
                                <div>R</div>
                                <div>D</div>
                                <div>L</div>
                                <div>E</div>
                            </div>
                            <div className="logo-remake-clone">
                                CLONE
                            </div>
                        </div>
                </Link>
                {user && (
                    <>
                    <Link to="/Game" className="navbar-title">
                    <div className="logo-remake-container">
                            <div className="logo-remake">
                                <div>W</div>
                                <div>O</div>
                                <div>R</div>
                                <div>D</div>
                                <div>L</div>
                                <div>E</div>
                            </div>
                            <div className="logo-remake-clone">
                                CLONE
                            </div>
                        </div>
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
                        <div className="logo-remake-container">
                            <div className="logo-remake">
                                <div>W</div>
                                <div>O</div>
                                <div>R</div>
                                <div>D</div>
                                <div>L</div>
                                <div>E</div>
                            </div>
                            <div className="logo-remake-clone">
                                CLONE
                            </div>
                        </div>
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
