import { useState } from "react";

function Logic(solution) {
    const [turn, setTurn] = useState(0)
    const [currGuess, setCurrGuess] = useState("")
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [log, setLog] = useState([])
    const [gameOver, setGameOver] = useState(false)

    function addGuess() {
        if (currGuess == solution) {
            setGameOver(!gameOver)
        }

        let sol = Array.from(solution)
        //console.log(sol)
        let guess = Array.from(currGuess).map(i => {
            return {letter: i, color: 'gray'}
        })

        for (let i = 0; i < 5; i++) {
            if (guess[i].letter == sol[i]) {
                guess[i].color = 'green'
                sol[i] = null
            } else if (sol.includes(guess[i].letter)) {
                guess[i].color = 'yellow'
            }
        }
        // console.log(guess)

        let g = guesses 
        g[turn] = guess
        setGuesses(g)
        // console.log(guesses)
    }

    function handleInput(input) {
        if (input == "Enter") {
            if (currGuess.length == 5 && !log.includes(currGuess)) {
                addGuess()

                let l = log
                l.push(currGuess)
                setLog(l)

                let t = turn
                t = t + 1
                setTurn(t)

                setCurrGuess("")
                return
            }
            return
        }
        if (input == "Backspace") {
            setCurrGuess(currGuess.slice(0, currGuess.length - 1))
            return
        }
        if (currGuess.length >= 5) {
            return
        }
        if (/^[a-zA-Z]$/.test(input) && !gameOver) {
            setCurrGuess(currGuess.concat(input.toUpperCase()))
        }
    }

    return {turn, currGuess, guesses, gameOver, handleInput}
}

export default Logic