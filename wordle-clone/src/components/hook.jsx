import { useState, useEffect } from "react"

function Hook(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [log, setLog] = useState([])
    const [gameOver, setGameOver] = useState(false)

    function handleGuess() {
        let sol = Array.from(solution)
        let gue = Array.from(currentGuess).map((i) => {
            return {letter: i, color: 'gray'}
        })
        //console.log(gue)
        for (let i = 0; i < 5; i++) {
            if (gue[i].letter == sol[i]) {
                gue[i].color = 'green'
            } else if (sol.includes(gue[i].letter)) {
                gue[i].color = 'yellow'
            }
            console.log(gue[i])
        }

        let temp1 = guesses
        temp1.push(gue)
        setGuesses(temp1)

        if (solution == currentGuess) {
            setGameOver(!gameOver)
            return
        }

        let temp2 = log
        temp2.push(currentGuess)
        setLog(temp2)

        let temp3 = turn
        temp3 = temp3 + 1
        setTurn(temp3)
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
                        handleGuess()
                    }
                }
            }
        }
    }

    return {turn, currentGuess, gameOver, handleInput}
}

export default Hook