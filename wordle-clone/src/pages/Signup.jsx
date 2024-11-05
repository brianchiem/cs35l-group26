import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const renderTrue = process.env.NODE_ENV === "production" ? true : false

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, username)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
            />
            <label>Username:</label>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
            />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
            {renderTrue && <div className="render">Due to the nature of Render, please allow up to 50s for an initial response.</div>}
        </form>
    )
}

export default Signup