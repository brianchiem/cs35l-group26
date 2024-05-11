import React from "react"
import Hook from './hook.jsx'
import Grid from "./grid.jsx"
import Keyboard from "./keyboard.jsx"

import { useEffect } from "react"

function Game({ solution }) {
    const { turn, currentGuess, guesses, gameOver, handleInput } = Hook(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleInput)

        return () => window.removeEventListener('keyup', handleInput)
    }, [handleInput])

    // useEffect(() => {
    //     console.log(guesses, turn, gameOver)
    // }, [guesses, turn, gameOver])

    return (
        <>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <div>Input: {currentGuess}</div>
            <div>Dev Current Solution: {solution}</div>
            <Keyboard />
        </>
    )
}

export default Game