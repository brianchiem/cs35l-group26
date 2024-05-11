import React from "react";
import './styles/row.css'

function Row({ guess, currentGuess }) {

    if (guess != null) {
        return (
            <div className="prev row">
                {guess.map((l, i) => (
                    <div className={l.color} key={i}>{l.letter}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let temp = Array.from(currentGuess)

        return (
            <div className="curr row">
                {temp.map((l, i) => (
                    <div key={i} className="filled">{l}</div>
                ))}
                {[...Array(5 - temp.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default Row