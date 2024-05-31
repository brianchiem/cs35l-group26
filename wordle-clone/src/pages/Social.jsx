import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"

function Social() {
    const [users, setUsers] = useState(null)
    // const friends = user.friends
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="social-1">
            <div className="users">
                {users && users.map((user) => (
                    <p key={user._id}>{user.username}</p>
                ))}
            </div>
        </div>
    )
}

export default Social