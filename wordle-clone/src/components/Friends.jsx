const Friends = ({user}) => {
    return (
        <div className="user-details">
            <h4>{user.username}</h4>
            {user.daily ? <p>Daily: Completed</p> : <p>Daily: Not Yet</p>}  
        </div>
    )
}

export default Friends