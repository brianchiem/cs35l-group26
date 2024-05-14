import Row from './Row.jsx'

function Grid(props) {
    return (
        <div className="grid">
            <Row row={0} word={props.guesses[0]} currGuess={props.currGuess} currTurn={props.currTurn}/>
            <Row row={1} word={props.guesses[1]} currGuess={props.currGuess} currTurn={props.currTurn}/>
            <Row row={2} word={props.guesses[2]} currGuess={props.currGuess} currTurn={props.currTurn}/>
            <Row row={3} word={props.guesses[3]} currGuess={props.currGuess} currTurn={props.currTurn}/>
            <Row row={4} word={props.guesses[4]} currGuess={props.currGuess} currTurn={props.currTurn}/>
            <Row row={5} word={props.guesses[5]} currGuess={props.currGuess} currTurn={props.currTurn}/>
        </div>
    )
}

export default Grid