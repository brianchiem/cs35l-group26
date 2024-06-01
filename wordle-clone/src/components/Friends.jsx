const Friends = (props) => {
    return (
        <div className="user-details">
            <h4>{props.user.username}</h4>
            {props.user.words.includes(props.solution) ? <p>Daily: Completed</p> : <p>Daily: Not Yet</p>}
        </div>
    )
}

export default Friends