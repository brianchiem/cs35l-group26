import React from 'react'
import "./styles/Social.css"
import { FaExclamationCircle } from 'react-icons/fa';
import './styles/How.css'
import { Link } from 'react-router-dom' 


const NotFoundPage = () => {
  return (
    <div className='social-1'>
      <FaExclamationCircle className='errormessage'/>
      <h1 className='exclamation'>
       404 Page Not Found
       </h1>
      <Link to='/' className='errorlink'>
          Go Back
      </Link>
    </div>
  )
}

export default NotFoundPage