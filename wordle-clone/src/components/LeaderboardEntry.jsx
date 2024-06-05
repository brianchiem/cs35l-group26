import pfp from '../uploads/defaultpfp.png'
import { useAuthContext } from '../hooks/useAuthContext'

const LeaderboardEntry = (props) => {
    const {user} = useAuthContext()

    const name = "user-details rank-" + (props.position + 1)
    return (
        <div className={name}>
            {(props.position == 0 || props.position == 1 || props.position == 2) ? <div className='rank-num'>#{props.position + 1}</div> : <></>}
            <div className={(props.user.username !== user.username) ? "user-container2" : "you"}>
                <div className='user-image-container2'>
                    <img className="user-pfp2" src={"https://res.cloudinary.com/dtbf4bkhl/image/upload/v1717560991/" + props.user.profilepicture}/>
                </div>
                <div className='user-info-container2'>
                    <h4>{(props.user.username == user.username) ? props.user.username + " (You)" : props.user.username}</h4>
                    <p>Current Streak: {props.user.streak}</p>
                    <p className='rank'>Rank: <strong>{props.position + 1}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardEntry