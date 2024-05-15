import { useEffect } from "react"
import Key from './Key'

function Keyboard(props) {

    const handleClick = (input) => {
        props.handleInput(input)
    }

    const handleKeyboard = (event) => {
        props.handleInput(event.key)
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyboard)

        return () => window.removeEventListener('keyup', handleKeyboard)
    }, [handleKeyboard])

    const Row1 = props.keyboardState.slice(0, 10)
    const Row2 = props.keyboardState.slice(10, 19)
    const Row3 = props.keyboardState.slice(19, 26)

    return (
        <div className="keyboard">
            <div className="row1">
                {
                    Row1.map((i, index) => <Key key={index} color={i.color} letter={i.key} handleInput={props.handleInput}/>)
                }
            </div>
            <div className="row2">
                {
                    Row2.map((i, index) => <Key key={index} color={i.color} letter={i.key} handleInput={props.handleInput}/>)
                }
            </div>
            <div className="row3">
                <button className="enter-button" onClick={() => handleClick("Enter")}>ENTER</button>
                {
                    Row3.map((i, index) => <Key key={index} color={i.color} letter={i.key} handleInput={props.handleInput}/>)
                }
                <button className="delete-button" onClick={() => handleClick("Backspace")}>DELETE</button>
            </div>
        </div>
    )
}

export default Keyboard
