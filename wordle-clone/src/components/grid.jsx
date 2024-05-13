import React from "react";
import Row from './row.jsx'
import './styles/grid.css'

function Grid({ currentGuess, guesses, turn}) { // need currentGuess to display on screen as they type, guesses to display previous guesses and color, and turn to know what rows are active
    return (
        <div className="grid">
            {guesses.map((g, i) => { // mapping across the 6 guesses so far
                if (turn == i) { // i represents rows and turns active, so e.g., we are on our second guess, we are on row 2, or turn == 1, i == 1
                    return <Row key={i} currentGuess={currentGuess}/> // if we are rendering the active row, use currentGuess
                }
                return <Row key={i} guess={g}/> // else it is a previous guess
            })}
        </div>
    )
}

export default Grid