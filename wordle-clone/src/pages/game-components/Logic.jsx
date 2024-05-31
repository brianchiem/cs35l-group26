import { useState } from "react";

const defaultKeyboard = [
    {key: 'Q', color: 'none'}, // index 0:
    {key: 'W', color: 'none'},
    {key: 'E', color: 'none'},
    {key: 'R', color: 'none'},
    {key: 'T', color: 'none'},
    {key: 'Y', color: 'none'},
    {key: 'U', color: 'none'},
    {key: 'I', color: 'none'},
    {key: 'O', color: 'none'},
    {key: 'P', color: 'none'}, // index 9
    {key: 'A', color: 'none'}, // index 10
    {key: 'S', color: 'none'},
    {key: 'D', color: 'none'},
    {key: 'F', color: 'none'},
    {key: 'G', color: 'none'},
    {key: 'H', color: 'none'},
    {key: 'J', color: 'none'},
    {key: 'K', color: 'none'},
    {key: 'L', color: 'none'}, // index 18
    {key: 'Z', color: 'none'}, // index 19
    {key: 'X', color: 'none'},
    {key: 'C', color: 'none'},
    {key: 'V', color: 'none'},
    {key: 'B', color: 'none'},
    {key: 'N', color: 'none'},
    {key: 'M', color: 'none'}, // index 25
]

function Logic(solution) {
    const [turn, setTurn] = useState(0)
    const [currGuess, setCurrGuess] = useState("")
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [log, setLog] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [win, setWin] = useState(false)
    const [keyboardState, setKeyboardState] = useState(defaultKeyboard)
    const [memory, setMemory] = useState(JSON.parse(localStorage.getItem('memory')))

    function addGuess() {
        if (currGuess == solution) {
            setGameOver(!gameOver)
            setWin(true)
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
        updateKeyboardState(guess)

        let g = guesses 
        g[turn] = guess
        setGuesses(g)
        // console.log(guesses)
    }

    function updateKeyboardState(guess) {
        let newKeyboardState = keyboardState
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 26; j++) {
                if (newKeyboardState[j].key == guess[i].letter) {
                    if (guess[i].color == 'green') {
                        newKeyboardState[j].color = 'grn'
                    }
                    if (guess[i].color == 'yellow' && newKeyboardState[j].color == 'none') {
                        newKeyboardState[j].color = 'ylw'
                    }
                    if (guess[i].color == 'gray' && newKeyboardState[j].color == 'none') {
                        newKeyboardState[j].color = 'gry'
                    }
                }
            }
        }
        setKeyboardState(newKeyboardState)
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

    return {turn, currGuess, guesses, gameOver, win, keyboardState, handleInput, setWin}
}

export default Logic