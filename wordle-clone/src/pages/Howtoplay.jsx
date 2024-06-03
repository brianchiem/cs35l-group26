import "./styles/How.css"
import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"
import "./styles/HomePage.css"
import {Link} from 'react-router-dom'


const Howtoplay = () => {
    const {user} = useAuthContext()
  return (
    <>
    <section>
        <div className="social-1">
            <h1>
                Welcome to Wordle Clone! 
            </h1>
            <h3>
                In this game, your objective is to deduce a five-letter word which changes daily.
            </h3>
            <div className="how-containstep">
            <h3 className="howstep-logo">
                Steps:
            </h3>
                <ul>
                    <li>
                        <h4>
                            To start the game log in or sign up
                        </h4>
                    </li>
                    <li>
                        <h4>
                            In this game will see a a six by five series of block, meaning each guess will take five blocks so you have six guesses.
                        </h4>
                        <h4 className="how-stepindent">
                            Put in your first five word guess! The word must be a valid word
                        </h4>
                        <div className="howlogo-remake-container">
                            <div className="howlogo-remake">
                                <div >G</div>
                                <div >U</div>
                                <div >E</div>
                                <div>S</div>
                                <div>S</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>
                           You will notice that your guess will have differently colors for each letter!
                        </h4>
                        <div className="howlogo-remake-container">
                            <div className="howlogo-remake">
                                <div className="howsquare-gray">G</div>
                                <div className="howsquare-yellow">U</div>
                                <div className="howsquare-green">E</div>
                                <div className="howsquare-yellow">S</div>
                                <div className="howsquare-green">S</div>
                            </div>
                        </div>
                        <h4 className="how-stepindent">
                            If your guess had a letter on the correct location,the box will be green 
                        </h4>
                        <h4 className="how-stepindent">
                            if it is in the word but not in the correct location, it will be orange. 
                        </h4>
                        <h4 className="how-stepindent">
                        Otherwise it will be gray
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Try your best and see who has the longest streak
                        </h4>
                    </li>
                    <li>
                        <h4>
                            If you have any questions please look at our <Link to='/FAQ'>FAQ</Link> page
                        </h4>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  );
};

export default Howtoplay