import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const renderTrue = process.env.NODE_ENV === "production" ? true : false

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(identifier, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email or Username:</label>
            <input 
                onChange={(e) => setIdentifier(e.target.value)}
                value={identifier}
                placeholder="Email or Username"
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
            />
            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
            {renderTrue && <div className="render">Due to the nature of Render, please allow up to 50s for an initial response.</div>}
        </form>
    )
}

export default Login