import pfp from '../uploads/defaultpfp.png'

const LeaderboardEntry = (props) => {

    const name = "user-details rank-" + (props.position + 1)
    return (
        <div className={name}>
            <div className="user-container">
                <div className='user-image-container'>
                    <img className="user-pfp" src={!props.user.profilepicture ? 'http://localhost:4000/images/defaultpfp.png' : 'http://localhost:4000/images/' + props.user.profilepicture}/>
                </div>
                <div className='user-info-container'>
                    <h4>{props.user.username}</h4>
                    <p>Current Streak: {props.user.streak}</p>
                    <p>Rank: {props.position + 1}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardEntry