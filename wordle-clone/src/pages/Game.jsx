import Grid from "./game-components/Grid"
import Keyboard from "./game-components/Keyboard"
import Logic from "./game-components/Logic"
import Popup from "./game-components/Popup"
import Emojis from "./game-components/Emoji/Emojis"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"

function Game(props) {
    const {user} = useAuthContext()
    const {turn, currGuess, guesses, gameOver, win, keyboardState, setWin, handleInput} = Logic(props.solution, props.ystword)
    const [popup, setPopup] = useState(true)
    //console.log(turn, currGuess, guesses, gameOver)

    const memory = JSON.parse(localStorage.getItem('win'))

    if (user.words.includes(props.solution)) {
        return (
            <div className="game">
                <Grid guesses={memory ? memory.guesses : guesses} currGuess={currGuess} currTurn={6}/>
                <Keyboard handleInput={handleInput} keyboardState={memory ? memory.keyboardState : keyboardState}/>
                <Popup trigger={popup} setTrigger={setPopup} guesses={memory ? memory.guesses : guesses} message={memory ? "You win!": "You already did today's Wordle!"}/>
            </div>
        )
    }

    return(
        <div className="game">
                {/* {memory ? <Grid guesses={memory.guesses}/> : <Grid guesses={guesses} currGuess={currGuess} currTurn={turn}/>} */}
                <Grid guesses={guesses} currGuess={currGuess} currTurn={turn}/>
                <Keyboard handleInput={handleInput} keyboardState={keyboardState}/>
                <Popup trigger={win} setTrigger={setWin} guesses={guesses} message="You win!"/>
        </div>
    )
}

export default Game
