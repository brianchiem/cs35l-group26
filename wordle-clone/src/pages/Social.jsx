import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Following from '../components/Following'
import Users from "../components/Users"
import Followers from "../components/Followers"
import Friends from "../components/Friends"
import {useSearch} from '../hooks/useSearch'

function Social(props) {
    const {user} = useAuthContext()
    const [users, setUsers] = useState(null)
    const [friends, setFriends] = useState([])
    const backup = JSON.parse(localStorage.getItem('user'))

    const [searching, setSearching] = useState('')
    const {search, isLoading, error} = useSearch()
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
        //console.log(user.friends)
        // console.log()
    }, [])

    // const handleSubmit = async() => {
    //     //e.preventDefault()
    //     console.log(searching)

    //     const json = await search(searching)

    //     if (json) {
    //         setUsers(json)
    //     }
    // }

    // const handleSearchChange = (e) => {
    //     e.preventDefault()
    //     setSearching(e.target.value)
    // }
    // useEffect(() => {
    //     handleSubmit()
    // }, [searching])


    return (
        <div className="social-1">
            {/* <form onSubmit={handleSubmit}>
                <input
                    // onChange={(e) => setSearching(e.target.value)}
                    onChange={handleSearchChange}
                    value={searching}
                />
                <button>Search</button>
                {error && <div className="error">{error}</div>}
            </form> */}
            <div className="users">
                <p>Users</p>
                {users && users.map((user) => (
                    <Users key={user._id} user={user} solution={props.solution}/>   
                ))}
            </div>
            <div className="users">
                <p>Doesn't follow you back</p>
                {users && users.map((user) => (
                    <Following key={user._id} user={user} solution={props.solution}/>   
                ))}
            </div>
            <div className="users">
                <p>You don't follow them back</p>
                {users && users.map((user) => (
                    <Followers key={user._id} user={user} solution={props.solution}/>   
                ))}
            </div>
            <div className="users">
                <p>Friends</p>
                {users && users.map((user) => (
                    <Friends key={user._id} user={user} solution={props.solution}/>   
                ))}
            </div>
        </div>
    )
}

export default Social