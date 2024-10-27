import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26.onrender.com/api" : "api"

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



function Logic(solution, ystword) {
    const [turn, setTurn] = useState(0)
    const [currGuess, setCurrGuess] = useState("")
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [log, setLog] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [keyboardState, setKeyboardState] = useState(defaultKeyboard)

    const {user} = useAuthContext()
    const {dispatch} = useAuthContext()
    const {_id, streak} = user
    //const _id = user._id

    const handleWin = async() => {
        const winArray = user.words
        winArray.push(solution)
        let updateStreak = streak
        if (winArray.includes(ystword)) {
            updateStreak = updateStreak + 1
        }
        else {
            updateStreak = 1
        }
        const response = await fetch(`${rootUrl}/user/` + _id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({words: winArray, streak: updateStreak})
        })
        const json = await response.json()

        const response1 = await fetch(`${rootUrl}/user/` + _id, {
            method: 'GET'
        })

        const json1 = await response1.json()

        if (response) {
            // console.log('here')
            // console.log(json)
            // console.log(json1)
            dispatch({type: 'UPDATE', payload: json1})
            localStorage.setItem('user', JSON.stringify(json1))
            localStorage.setItem('win', JSON.stringify({guesses: guesses, keyboardState: keyboardState, type: 'win'}))
            localStorage.removeItem('localstate')
            console.log('successfully removed localstate')
        }
    }

    const handleLose = async() => {
        const loseArray = user.miss
        loseArray.push(solution)
        
        const response = await fetch(`${rootUrl}/user/` + _id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({miss: loseArray})
        })
        const json = await response.json()

        const response1 = await fetch(`${rootUrl}/user/` + _id, {
            method: 'GET'
        })

        const json1 = await response1.json()

        if (response) {
            // console.log('here')
            // console.log(json)
            // console.log(json1)
            dispatch({type: 'UPDATE', payload: json1})
            localStorage.setItem('user', JSON.stringify(json1))
            localStorage.setItem('win', JSON.stringify({guesses: guesses, keyboardState: keyboardState, type: 'lost'}))
            localStorage.removeItem('localstate')
            console.log('successfully removed localstate')
        }
    }

    function addGuess() {
        if (currGuess == solution) {
            setGameOver(!gameOver)
            setWin(true)
            handleWin()
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
        if (turn == 5 && !win) {
            setLose(true)
            handleLose()
        }
        localStorage.setItem('localstate', JSON.stringify({turn: turn, currGuess: currGuess, guesses: guesses, log: log, gameOver: gameOver, win: win, lose: lose, keyboardState: keyboardState}))
        console.log('successfully stored localstate')
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

    return {turn, currGuess, guesses, gameOver, win, lose, keyboardState, handleInput, setWin, setLose, setKeyboardState, setGameOver, setLog, setGuesses, setCurrGuess, setTurn}
}

export default Logic