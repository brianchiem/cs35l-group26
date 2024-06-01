import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Friends from '../components/Friends'

function Social() {
    const {user} = useAuthContext()
    const [users, setUsers] = useState(null)
    const [friends, setFriends] = useState([])
    const backup = JSON.parse(localStorage.getItem('user'))
    // const friends = user.friends
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
                setFriends(user.friends)
            }
        }

        fetchUsers()    
        console.log(user.friends)
        // console.log()
    }, [])


    return (
        <div className="social-1">
            <div className="users">
                {users && users.map((user) => (
                    <Friends key={user._id} user={user}/>   
                ))}
            </div>
        </div>
    )
}

export default Social