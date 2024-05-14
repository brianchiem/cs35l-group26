import Square from './Square.jsx'

function Row(props) {

    if (props.row == props.currTurn) {
        let temp1 = props.currGuess
        //console.log(temp1)
        if (temp1.length != 5) {
            switch(temp1.length) {
                case 0:
                    temp1 = "     "
                    break;
                case 1:
                    temp1 = temp1 + "    "
                    break;
                case 2:
                    temp1 = temp1 + "   "
                    break;
                case 3: 
                    temp1 = temp1 + "  "
                    break;
                case 4:
                    temp1 = temp1 + " "
                    break;
            } 
        }
        //console.log(temp1)
        const temp2 = Array.from(temp1)
        //console.log(temp2)
        return (
            <div className='row'>
                {
                    temp2.map((i, index) => <Square key={index} letter={i} color={(i == " ") ? "none" : "filled"}/>)
                }
            </div>
        )
    }

    if (!props.word) {
        return (
            <div className='row'>
                <Square letter=" " color="none"/>
                <Square letter=" " color="none"/>
                <Square letter=" " color="none"/>
                <Square letter=" " color="none"/>
                <Square letter=" " color="none"/>
            </div>
            
        )
    }

    return (
        <div className='row'>
            {
                props.word.map((l, index) => <Square key={index} letter={l.letter} color={l.color}/>)
            }
        </div>
    )
}

export default Row