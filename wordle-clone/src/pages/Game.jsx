import Grid from "./game-components/Grid"
import Keyboard from "./game-components/Keyboard"
import Logic from "./game-components/Logic"
import WinScreen from "./game-components/WinScreen"

function Game(props) {
    const {turn, currGuess, guesses, gameOver, win, keyboardState, setWin, handleInput} = Logic(props.solution)
    //console.log(turn, currGuess, guesses, gameOver)

    const memory = JSON.parse(localStorage.getItem('win'))

    return(
        <div className="game">
                {memory ? <Grid guesses={memory.guesses} currGuess={currGuess} /> : <Grid guesses={guesses} currGuess={currGuess} currTurn={turn}/>}
                <Keyboard handleInput={handleInput} keyboardState={keyboardState}/>
                <WinScreen trigger={win} setTrigger={setWin} guesses={guesses}/>
        </div>
    )
}

export default Game
