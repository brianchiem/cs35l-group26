import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "./styles/EditUsername.css";

const EditUsername = (props) => {
    const { user, dispatch } = useAuthContext();
    const [newUsername, setNewUsername] = useState("");
    // const [popupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        updateUsername()
    }

    const updateUsername = async () => {
        const response = await fetch('https://cs35l-group26.onrender.com/user/' + user._id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: newUsername })
        });
        const json = await response.json();
        // console.log("Old User State: ", json)
        if (response.ok) {
            const response2 = await fetch('https://cs35l-group26.onrender.com/user/' + user._id, {
                method: 'GET'
            })
            const updatedUser = await response2.json()

            dispatch({ type: 'UPDATE', payload: updatedUser });
            localStorage.setItem('user', JSON.stringify(updatedUser));
            // setPopupVisible(true);  // Show the popup
            props.setTrigger(false)
            toast.success("Succesfully changed your Username")
            navigate('/profile')
        }
    };

    // const closePopup = () => {
    //     setPopupVisible(false);
    //     navigate('/profile');
    // };

    return (props.trigger) ? (
        <div className="edit-username-outer">
                <form className="edit-username-container" onSubmit={handleSubmit}>
                <span className="material-symbols-outlined" onClick={() => props.setTrigger(false)}>close</span>
                <h2>Edit Username</h2>
                <input
                    type="text"
                    placeholder="New Username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <button className="update-username">Update Username</button>
            </form>


            {/* {popupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Success!</h3>
                        <p>Your username has been updated successfully.</p>
                        <button className="close-popup" onClick={closePopup}>OK</button>
                    </div>
                </div>
            )} */}
        </div>
    ): (
        <></>
    )
};

export default EditUsername;

