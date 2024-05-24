
function EmojiRow(props) {
    let newRow = props.row
    let emojiArray = []
    if (newRow) {
        for (let i = 0; i < 5; i++) {
            if (newRow[i].color == 'gray') {
                emojiArray.push('🩶')
            } else if (newRow[i].color == 'green') {
                emojiArray.push('💚')
            } else if (newRow[i].color == 'yellow') {
                emojiArray.push('💛')
            }
        }
        return (
        <div className="emoji-row">
            {emojiArray.map((i, index) => <div key={index} className="emoji">{i}</div>)}
        </div>
        )
    }
    else {
        return (
            <div className="emoji-row"></div>
        )
    }
    
}

export default EmojiRow