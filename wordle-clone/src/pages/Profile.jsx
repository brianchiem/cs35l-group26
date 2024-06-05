import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useNavigate } from 'react-router-dom';
import "./styles/HomePage.css";

const Profile = () => {
    const { user, dispatch } = useAuthContext();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const upload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const json = await response.json();
        if (response.ok) {
            const response2 = await fetch('/api/user/' + user._id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profilepicture: json.filename })
            });
            const json2 = await response2.json();

            if (response2.ok) {
                dispatch({ type: 'UPDATE', payload: json2 });
                localStorage.setItem('user', JSON.stringify(json2));
            }
        }
    };

    const navigateToEditUsername = () => {
        navigate('/edit-username');
    };

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser._id) {
                const response = await fetch('/api/user/' + storedUser._id);
                const json = await response.json();
                if (response.ok) {
                    dispatch({ type: 'UPDATE', payload: json });
                }
            }
        };
        fetchUser();
    }, [dispatch]);

    return (
        <div className="profile-container">
            <div className="image-column">
                <img className="pfp" src={!user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + user.profilepicture} alt="Profile" />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button className="upload" type="button" onClick={upload}>Upload</button>
            </div>
            <div className="profile-details">
                <div className="profile-username">{user.username}</div>
                <button className="edit-username" type="button" onClick={navigateToEditUsername}>Edit Username</button>
                <p>Your current streak: {user.streak}</p>
                <div className='helpin-profile'>
                    <span className="material-symbols-outlined">help</span>
                    <Link className='LinkFont' to='/How-to-Play'>Help</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
