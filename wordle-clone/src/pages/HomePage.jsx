import React from 'react'
import "./styles/Social.css"
import { Link }from 'react-router-dom'
import "./styles/HomePage.css"


const HomePage = () => {
  return (
    <div>
        <div className='HowtoPlay-Start'>
            <div className='center-container'>
              <div className='center-title'>
                <div className='square-green'>W</div>
                <div className='square-gray'>O</div>
                <div className='square-yellow'>R</div>
                <div className='square-gray'>D</div>
                <div className='square-green'>L</div>
                <div className='square-yellow'>E</div>
              </div>
              <div className='clone'>
                CLONE
              </div>
              <div className="home-buttons">
                <Link className='login-button' to="/Login">
                  Login
                </Link>
                <Link className="signup-button" to="/Signup">
                  Signup
                </Link>
              </div>
              <div className='help-home'>
              <span className="material-symbols-outlined">
                help
              </span>
              <Link className='LinkFont' to='/How-to-Play'> 
                  How to Play 
              </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage