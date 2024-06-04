import React from "react";
import './styles/Navbar.css'
import logo from './assets/w.png'
import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import pfp from '../uploads/defaultpfp.png'
import { BiGridSmall } from "react-icons/bi";



function Navbar() {
    const [NavBarShow, setNavBarShow] = useState(false);
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
            
            
            <button className="align-dot" onClick={() => setNavBarShow((prevState) => !prevState)}>
                <BiGridSmall className="Grid-class"/>
            </button>

            { NavBarShow && (   
                <>                
                 <div className="asidebar-box">
                    {user && (
                        <div className="side-bar-container">
                             <Link className="navpfp" to={`/Profile`} >
                            <img src={!user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + user.profilepicture}/>
                            <div className="font-final1" >{user.username}</div>
                        </Link>
                        <Link className="font-final1" to="/Leaderboards">
                            Leaderboards
                        </Link>
                        <Link className="font-final1" to="/Social">
                            Social
                        </Link>
                        <button className="log_out" onClick={handleClick}>Log out</button>
                    </div>
                    )}

                    {!user && (
                         <div className="side-bar-container">
                             <Link className="font-final1" to="/login">
                                 Login
                             </Link>
                             <Link className="font-final1" to="/signup">
                                 Signup
                             </Link>
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
