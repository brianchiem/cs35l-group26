import React from 'react'
import "./styles/Social.css"
import { Link }from 'react-router-dom'
import "./styles/HomePage.css"


const HomePage = () => {
  return (
    <div className='social-1'>
        <div className='HowtoPlay-Start'>
            <h1>
            Hello Welcome to our Wordle Game!
            Are you ready to start playing and competing against countless other users?
            </h1>
        </div>
        <div className='LinkFont'>
            <Link to='/How-to-Play'> 
                Learn How to Play
            </Link>
        </div>

    </div>
  )
}

export default HomePage