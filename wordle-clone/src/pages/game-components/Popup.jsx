import './styles/WinScreen.css'
import Emojis from './Emoji/Emojis.jsx'

// import { useAuthContext } from '../../hooks/useAuthContext.js'

function Popup(props) {

    // if (props.trigger) {
    //     localStorage.setItem('win', JSON.stringify({win: true, guesses: props.guesses}))
    // }
    return (props.trigger) ? (
    <div className='win-screen-outer'>
        <div className="win-screen-container">
            <div className='win-title'>
                {props.message}
            </div>
            <button className='close-button' onClick={() => props.setTrigger(false)}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
            <Emojis guesses={props.guesses}/>
        </div>
    </div>
    ) : (
        <div className='invisible'>

        </div>
    )
}

export default Popup