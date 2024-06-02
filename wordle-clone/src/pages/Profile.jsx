import { useState } from "react"
import pfp from '../uploads/defaultpfp.png'

const Profile = () => {
    const [file, setFile] = useState()

    const upload = async() => {
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        const json = await response.json()
        if (response.ok) {
            console.log(json)
        }
    }
    return (
        <div className="profile">
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
            <button type="button" onClick={upload}>Upload</button>
            <img className="pfp" source={pfp}/>
        </div>
    )

}

export default Profile