import React from 'react'
import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"
import Social from './Social'
import Profile from './Profile'








const ProfilePage = (props) => {

    const { user } = useAuthContext();

  return (
    <div className='social-1'>
        <div>
            <h2> Hello, welcome {user.username} </h2>
            <div>
            <h2> You currently have a streak of {user.streak} </h2>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage