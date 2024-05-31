import "./styles/Leaderboards.css"
import {useAuthContext} from '../hooks/useAuthContext.js'

function Leaderboards() {
    const {user} = useAuthContext()
    return (
        <div className="leaderboards-1">
            {user.streak}
        </div>
    )
}

export default Leaderboards