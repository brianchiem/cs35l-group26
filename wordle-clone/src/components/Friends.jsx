import { useAuthContext } from "../hooks/useAuthContext"
import pfp from '../uploads/defaultpfp.png'

const Friends = (props) => {
    const {user} = useAuthContext()
    return (
        <div className="user-details">
            {(user.friends.includes(props.user.email) && (props.user.friends.includes(user.email))) ? (
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
                    </div>
            </div>           
            ) : <></>}
        </div>
    )
}

export default Friends