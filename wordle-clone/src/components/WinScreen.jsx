import './styles/WinScreen.css'
import Emojis from './Emoji/Emojis.jsx'

function WinScreen(props) {
    return (props.trigger) ? (
    <div className='win-screen-outer'>
        <div className="win-screen-container">
            <div className='win-title'>
                You Win!
            </div>
            <button className='close-button' onClick={() => props.setTrigger(false)}>
                X
            </button>
            <Emojis guesses={props.guesses}/>
        </div>
    </div>
    ) : (
        <div className='invisible'>

        </div>
    )
}

export default WinScreen