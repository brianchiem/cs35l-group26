import { useState, useEffect } from "react"

function Hook(solution) {
    // Keep track of turns, 6 tries maximum
    const [turn, setTurn] = useState(0)
    // What the player is currently inputting
    const [currentGuess, setCurrentGuess] = useState('')
    // All the player's formatted guesses into [{letter: a, color: gray}, ...]
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    // keep a log of all strings tried so far
    const [log, setLog] = useState([])
    // game state
    const [gameOver, setGameOver] = useState(false)

    function handleGuess() {
        // convert solution string into an array ['n', 'i', 'n', 'j', 'a']
        let sol = Array.from(solution)
        // convert currentGuess string into an array of objects [{letter: 'a', color: 'gray'}, ...]
        let gue = Array.from(currentGuess).map((i) => {
            return {letter: i, color: 'gray'}
        })
        //console.log(gue)
        for (let i = 0; i < 5; i++) {
            // check if the letter at index i in both are the same (green)
            if (gue[i].letter == sol[i]) {
                gue[i].color = 'green'
            } else if (sol.includes(gue[i].letter)) { // otherwise check if the letter is atleast in the word
                gue[i].color = 'yellow'
            }
        }

        setterFunction(gue)
    }

    function setterFunction(guess) {
        // check if they got it right
        if (currentGuess == solution) {
            setGameOver(!gameOver)
        }
        // set guesses
        let temp1 = guesses
        temp1[turn] = guess
        setGuesses(temp1)
        // set log
        let temp2 = log
        temp2.push(currentGuess)
        setLog(temp2)
        // set turn
        let temp3 = turn
        temp3 = temp3 + 1
        setTurn(temp3)
        // set back to empty string
        setCurrentGuess('')
    }

    function handleInput({ key }) {
        // check if input is a alphabetical character
        if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
        // deleting
        if (key == 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
        }
        // entering a string, must be able to even submit, can't be a string already guessed, must be in word bank, and must be of length 5
        if (key == 'Enter') {
            if (turn < 6) {
                if (!log.includes(currentGuess)) {
                    if (currentGuess.length == 5) {
                        handleGuess()
                    }
                }
            }
        }
    }

    return {turn, currentGuess, guesses, gameOver, handleInput}
}

export default Hook