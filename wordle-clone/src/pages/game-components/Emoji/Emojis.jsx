import EmojiRow from "./EmojiRow"
import './Emojis.css'

function Emojis(props) {
    return (
        <div className="emoji-grid">
            <EmojiRow row={props.guesses[0]}/>
            <EmojiRow row={props.guesses[1]}/>
            <EmojiRow row={props.guesses[2]}/>
            <EmojiRow row={props.guesses[3]}/>
            <EmojiRow row={props.guesses[4]}/>
            <EmojiRow row={props.guesses[5]}/>
        </div>
        
    )
}

export default Emojis