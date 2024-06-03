import { useAuthContext } from "../hooks/useAuthContext"
import pfp from '../uploads/defaultpfp.png'

const Users = (props) => {
    const {user} = useAuthContext()
    const {dispatch} = useAuthContext()

    const handleClick = async() => {
        const updateFriends = user.friends
        updateFriends.push(props.user.username)

        const updateFollowers = props.user.followers
        updateFollowers.push(user.username)

        // Update User's friends
        const response = await fetch('/api/user/' + user._id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({friends: updateFriends})
        })
        const json = await response.json()
        
        // Update the person they followed
        const response2 = await fetch('/api/user/' + props.user._id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({followers: updateFollowers})
        })
        const json2 = await response2.json()

        const response1 = await fetch('/api/user/' + user._id, {
            method: 'GET'
        })

        const json1 = await response1.json()

        if (response) {
            console.log('here')
            console.log(json)
            console.log(json1)
            console.log(json2)
            dispatch({type: 'UPDATE', payload: json1})
            localStorage.setItem('user', JSON.stringify(json1))
        }
    }


    return (
        <div className="user-details">
            {((props.user.username !== user.username) && (!user.friends.includes(props.user.username) && (!props.user.friends.includes(user.username)))) ? (
                <div>
                    <div className="user-container">
                        <div className='user-image-container'>
                            <img className="user-pfp" src={!props.user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + props.user.profilepicture}/>
                        </div>
                        <div className='user-info-container'>
                            <h4>{props.user.username}</h4>
                            <div>{(props.user.words.includes(props.solution) || props.user.miss.includes(props.solution)) ? <p>Daily: Completed</p> : <p>Daily: Not Yet</p>}</div>
                            <p>Current Streak: {props.user.streak}</p>
                        </div>
                        <div className="user-follow-container">
                            <span onClick={handleClick}>Follow</span>
                        </div>
                    </div>
                </div>
            ) : <></>}
        </div>
    )
}

export default Users