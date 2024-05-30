import { useState } from "react";

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(identifier, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email or Username:</label>
            <input 
                onChange={(e) => setIdentifier(e.target.value)}
                value={identifier}
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Log in</button>
        </form>
    )
}

export default Login