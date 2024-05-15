import './styles/WinScreen.css'

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
        </div>
    </div>
    ) : (
        <div className='invisible'>

        </div>
    )
}

export default WinScreen