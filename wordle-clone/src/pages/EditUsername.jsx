import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from 'react-router-dom';
import "./styles/EditUsername.css";

const EditUsername = () => {
    const { user, dispatch } = useAuthContext();
    const [newUsername, setNewUsername] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();

    const updateUsername = async () => {
        const response = await fetch('/api/user/' + user._id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: newUsername })
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'UPDATE', payload: json });
            localStorage.setItem('user', JSON.stringify(json));
            setPopupVisible(true);  // Show the popup
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
        navigate('/profile');
    };

    return (
        <div className="edit-username-container">
            <h2>Edit Username</h2>
            <input
                type="text"
                placeholder="New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button className="update-username" type="button" onClick={updateUsername}>Update Username</button>

            {popupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Success!</h3>
                        <p>Your username has been updated successfully.</p>
                        <button className="close-popup" onClick={closePopup}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditUsername;

