import { useState, useEffect } from "react"

function Hook(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [log, setLog] = useState([])
    const [gameOver, setGameOver] = useState(false)

    function format() {
        
    }

    function addGuess() {

    }

    function handleInput({ key }) {

        if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
        if (key == 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
        }
        if (key == 'Enter') {
            if (turn < 5) {
                if (!log.includes(currentGuess)) {
                    if (currentGuess.length == 5) {
                        addGuess()
                    }
                }
            }
        }
    }

    return {turn, currentGuess, gameOver, handleInput}
}

export default Hook