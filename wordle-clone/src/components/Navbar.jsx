import React from "react";
import './styles/Navbar.css'
import logo from './assets/w.png'
import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import pfp from '../uploads/defaultpfp.png'
import { FiMenu } from "react-icons/fi";
import useDate from "../hooks/useDate";



function Navbar() {
    const [NavBarShow, setNavBarShow] = useState(false);
    const { logout } = useLogout()
    const { user } = useAuthContext()
    let now = useDate()
    let date = now.toLocaleDateString('en-US', {dateStyle: "long"})
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
                    </>
                )}
            
            
            <div className={NavBarShow ? "align-dot" : "drop-move"} onClick={() => setNavBarShow((prevState) => !prevState)}>
                <FiMenu className="Grid-class"/>
            </div>

            { NavBarShow && (   
                <>                
                 <div className="asidebar-box">
                    {user && (
                        <div className="side-bar-container">
                        <Link className="navpfp" to={`/Profile`} >
                            <img src={"https://res.cloudinary.com/dtbf4bkhl/image/upload/v1717560991/" + user.profilepicture}/>
                            <div className="font-final1" >{user.username}</div>
                        </Link>
                        <Link className="dropdown-links" to="/Leaderboards">
                            Leaderboards
                        </Link>
                        <Link className="dropdown-links" to="/Social">
                            Social
                        </Link>
                        <div className="log_out" onClick={handleClick}>Log out</div>
                        <div className="nav-date">{date}</div>
                    </div>
                    )}

                    {!user && (
                         <div className="side-bar-container">
                             <Link className="dropdown-links" to="/login">
                                 Login
                             </Link>
                             <Link className="dropdown-links" to="/signup">
                                 Signup
                             </Link>
                             <div className="nav-date">{date}</div>
                             </div>
                    )}


                 </div>


                </>


        )}
            
         </div>
        </>
    )
}

export default Navbar
