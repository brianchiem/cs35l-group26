import { useEffect } from "react"

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

    return (
        <div className="keyboard">
            <div className="row1">
                <button className="onscreen-button" onClick={() => handleClick("Q")}>Q</button>
                <button className="onscreen-button" onClick={() => handleClick("W")}>W</button>
                <button className="onscreen-button" onClick={() => handleClick("E")}>E</button>
                <button className="onscreen-button" onClick={() => handleClick("R")}>R</button>
                <button className="onscreen-button" onClick={() => handleClick("T")}>T</button>
                <button className="onscreen-button" onClick={() => handleClick("Y")}>Y</button>
                <button className="onscreen-button" onClick={() => handleClick("U")}>U</button>
                <button className="onscreen-button" onClick={() => handleClick("I")}>I</button>
                <button className="onscreen-button" onClick={() => handleClick("O")}>O</button>
                <button className="onscreen-button" onClick={() => handleClick("P")}>P</button>
            </div>
            <div className="row2">
                <button className="onscreen-button" onClick={() => handleClick("A")}>A</button>
                <button className="onscreen-button" onClick={() => handleClick("S")}>S</button>
                <button className="onscreen-button" onClick={() => handleClick("D")}>D</button>
                <button className="onscreen-button" onClick={() => handleClick("F")}>F</button>
                <button className="onscreen-button" onClick={() => handleClick("G")}>G</button>
                <button className="onscreen-button" onClick={() => handleClick("H")}>H</button>
                <button className="onscreen-button" onClick={() => handleClick("J")}>J</button>
                <button className="onscreen-button" onClick={() => handleClick("K")}>K</button>
                <button className="onscreen-button" onClick={() => handleClick("L")}>L</button>
            </div>
            <div className="row3">
                <button className="enter-button" onClick={() => handleClick("Enter")}>ENTER</button>
                <button className="onscreen-button" onClick={() => handleClick("Z")}>Z</button>
                <button className="onscreen-button" onClick={() => handleClick("X")}>X</button>
                <button className="onscreen-button" onClick={() => handleClick("C")}>C</button>
                <button className="onscreen-button" onClick={() => handleClick("V")}>V</button>
                <button className="onscreen-button" onClick={() => handleClick("B")}>B</button>
                <button className="onscreen-button" onClick={() => handleClick("N")}>N</button>
                <button className="onscreen-button" onClick={() => handleClick("M")}>M</button>
                <button className="delete-button" onClick={() => handleClick("Backspace")}>DELETE</button>
            </div>
        </div>
    )
}

export default Keyboard
