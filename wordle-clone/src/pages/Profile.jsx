import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useNavigate } from 'react-router-dom';
import EditUsername from "./EditUsername";
import {toast} from 'react-toastify';
import "./styles/HomePage.css";
const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26.onrender.com/api" : "api"

const Profile = () => {
    const { user, dispatch } = useAuthContext();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(false)

    const upload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${rootUrl}/upload/`, {
            method: 'POST',
            body: formData
        });
        const json = await response.json();
        if (response.ok) {
            const response2 = await fetch(`${rootUrl}/user/` + user._id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profilepicture: (json.public_id + "." + json.format) })
            });
            const json2 = await response2.json();
            
            const response3 = await fetch(`${rootUrl}/user/` + user._id, {
                method: 'GET'
            })
            const json3 = await response3.json()

            if (response3) {
                // console.log('Here')
                dispatch({ type: 'UPDATE', payload: json3 });
                localStorage.setItem('user', JSON.stringify(json3));
                toast.success("Profile Picture Updated")
            }
        }
    };

    const navigateToEditUsername = () => {
        // navigate('/edit-username');
        setTrigger(!trigger)
    };

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const storedUser = JSON.parse(localStorage.getItem('user'));
    //         if (storedUser && storedUser._id) {
    //             const response = await fetch('/api/user/' + storedUser._id);
    //             const json = await response.json();
    //             if (response.ok) {
    //                 dispatch({ type: 'UPDATE', payload: json });
    //             }
    //         }
    //     };
    //     fetchUser();
    // }, [dispatch]);

    return (
        <div>
            <div className="profile-container">
                <div className="image-column">
                    <img className="pfp" src={"https://res.cloudinary.com/dtbf4bkhl/image/upload/v1717560991/" + user.profilepicture} alt='Profile' />
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <button className="upload" type="button" onClick={upload}>Upload</button>
                </div>
                <div className="profile-details">
                    <div className="profile-username">{user.username}<span className="material-symbols-outlined" onClick={navigateToEditUsername}>edit</span></div>
                    <div className="profile-email">{user.email}</div>
                    <p>Your current streak: {user.streak}</p>
                    <div className='helpin-profile'>
                        <span className="material-symbols-outlined">help</span>
                        <Link className='LinkFont' to='/How-to-Play'>Help</Link>
                    </div>
                </div>
            </div>
            <EditUsername trigger={trigger} setTrigger={setTrigger}/>
        </div>
       
    );
};

export default Profile;
