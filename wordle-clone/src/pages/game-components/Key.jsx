
function Key(props) {

    const handleClick = () => {
        props.handleInput(props.letter)
    }
    return (
        <button className={props.color} onClick={() => handleClick()}>{props.letter}</button>
    )
    
}

export default Key