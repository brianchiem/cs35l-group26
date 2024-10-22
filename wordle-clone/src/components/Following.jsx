import { useAuthContext } from "../hooks/useAuthContext"
import pfp from '../uploads/defaultpfp.png'

const Following = (props) => {
    const {user} = useAuthContext()
    const {dispatch} = useAuthContext()

    const handleUnfollow = async () => {
        const updateFriends = user.friends.filter(email => email !== props.user.email)
        const updateFollowers = props.user.followers.filter(email => email !== user.email)

        // update user's friends
        const response = await fetch('https://cs35l-group26.onrender.com/user/' + user._id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({friends: updateFriends})
        })
        const json = await response.json()

        // update the unfollowed user's followers
        const response2 = await fetch ('https://cs35l-group26.onrender.com/user/' + props.user._id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({followers: updateFollowers})
        })
        const json2 = await response2.json();

        // fetch updated current user data
        const response1 = await fetch('https://cs35l-group26.onrender.com/user/' + user._id, {
            method: 'GET'
        })

        const json1 = await response1.json();

        if (response.ok && response2.ok) {
            console.log('Unfollow action completed')
            dispatch({type:'UPDATE', payload: json1});
            localStorage.setItem('user', JSON.stringify(json1))
        }

    }

    return (
        <div className="user-details">
            {(user.friends.includes(props.user.email) && !(props.user.friends.includes(user.email))) ? (
            <div>
                    <div className="user-container">
                        <div className='user-image-container'>
                            <img className="user-pfp" src={"https://res.cloudinary.com/dtbf4bkhl/image/upload/v1717560991/" + props.user.profilepicture}/>
                        </div>
                        <div className='user-info-container'>
                            <h4>{props.user.username}</h4>
                            <div>{(props.user.words.includes(props.solution) || props.user.miss.includes(props.solution)) ? <p>Daily: Completed</p> : <p>Daily: Not Yet</p>}</div>
                            <p>Current Streak: {props.user.streak}</p>
                        </div>
                        <div className="user-follow-container">
                            <span onClick={handleUnfollow}>Unfollow</span>
                        </div>
                    </div>
            </div>           
            ) : <></>}
        </div>
    )
}

export default Following