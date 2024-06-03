import { useState } from "react"
import pfp from '../uploads/defaultpfp.png'
import { useAuthContext } from "../hooks/useAuthContext"
import { Link }from 'react-router-dom'
import "./styles/HomePage.css"

const Profile = () => {
    const {user} = useAuthContext()
    const {dispatch} = useAuthContext()
    const [file, setFile] = useState(null)

    const upload = async() => {
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        const json = await response.json()
        if (response.ok) {
            console.log(json.filename)
            console.log(typeof(json.filename))
            // setFile(json.filename)

            const response2 = await fetch('/api/user/' + user._id, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({profilepicture: json.filename})
            })
            const json2 = await response2.json()

            const response3 = await fetch('/api/user/' + user._id, {
                method: 'GET'
            })
            const json3 = await response3.json()

            console.log(json3)
            console.log(json2)
            console.log(json)
            dispatch({type: 'UPDATE', payload: json3})
            localStorage.setItem('user', JSON.stringify(json3))
        }
    }
    return (
        <div className="profile-container">
            <div className="image-column">
                <img className="pfp" src={!user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + user.profilepicture}/>
                <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                <button className="upload" type="button" onClick={upload}>Upload</button>
            </div>
            <div className="profile-details">
                <div className="profile-username">{user.username}</div>
                <p>Your current streak: {user.streak}</p>
                    <div className='helpin-profile' >
                    <span className="material-symbols-outlined">
                        help
                    </span>
                    <Link className='LinkFont' to='/How-to-Play'> 
                        Help
                    </Link>
                    </div>
            </div>
        </div>
    )

}

export default Profile