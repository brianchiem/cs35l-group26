import Grid from "./Grid"
import Keyboard from "./Keyboard"
import Logic from "./Logic"
import WinScreen from "./WinScreen"

function Game(props) {
    const {turn, currGuess, guesses, gameOver, win, keyboardState, setWin, handleInput} = Logic(props.solution)
    //console.log(turn, currGuess, guesses, gameOver)

    return (
        <div className="game">
            <Grid guesses={guesses} currGuess={currGuess} currTurn={turn}/>
            <Keyboard handleInput={handleInput} keyboardState={keyboardState}/>
            <WinScreen trigger={win} setTrigger={setWin} guesses={guesses}/>
        </div>
        
    )
}

export default Game
