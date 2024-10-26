import "./styles/Leaderboards.css"
import {useAuthContext} from '../hooks/useAuthContext.js'
import { useState, useEffect } from "react"
import LeaderboardEntry from "../components/LeaderboardEntry.jsx"
const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26.onrender.com/api" : "api"

function Leaderboards() {
    const {user} = useAuthContext()
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`${rootUrl}/user/2`)
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="leaderboard">
            {users && users.map((user) => (
                <LeaderboardEntry key={user._id} user={user} position={users.indexOf(user)}/>   
            ))}
        </div>
    )
}

export default Leaderboards