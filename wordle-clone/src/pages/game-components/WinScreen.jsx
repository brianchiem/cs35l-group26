import './styles/WinScreen.css'
import Emojis from './Emoji/Emojis.jsx'

// import { useAuthContext } from '../../hooks/useAuthContext.js'

function WinScreen(props) {

    // if (props.trigger) {
    //     localStorage.setItem('win', JSON.stringify({win: true, guesses: props.guesses}))
    // }
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