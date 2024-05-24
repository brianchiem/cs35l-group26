
function Square(props) {

    if (props.color == 'gray') {
        return (
            <div className="gray">
                {props.letter}
            </div>
        )
    }
    if (props.color == 'green') {
        return (
            <div className="green">
                {props.letter}
            </div>
        )
    }
    if (props.color == 'yellow') {
        return (
            <div className="yellow">
                {props.letter}
            </div>
        )
    }
    if (props.color == 'filled') {
        return (
            <div className="filled">
                {props.letter}
            </div>
        )
    }
    return (
        <div className="square">
            {props.letter}
        </div>
    )
}

export default Square