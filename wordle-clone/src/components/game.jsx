import React from "react"
import Hook from './hook.jsx'
import { useEffect } from "react"

function Game({ solution }) {
    const { currentGuess, handleInput } = Hook(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleInput)

        return () => window.removeEventListener('keyup', handleInput)
    }, [handleInput])

    return (
        <div>Input: {currentGuess}</div>
    )
}

export default Game