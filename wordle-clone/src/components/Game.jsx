import Grid from "./Grid"
import Keyboard from "./Keyboard"
import Logic from "./Logic"

function Game(props) {
    const {turn, currGuess, guesses, gameOver, keyboardState, handleInput} = Logic(props.solution)

    console.log(turn, currGuess, guesses, gameOver)

    return (
        <div>
            <Grid guesses={guesses} currGuess={currGuess} currTurn={turn}/>
            <Keyboard handleInput={handleInput} keyboardState={keyboardState}/>
        </div>
        
    )
}

export default Game
