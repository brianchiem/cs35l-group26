import "./styles/How.css"
import "./styles/Social.css"
import { useAuthContext } from "../hooks/useAuthContext"

const Howtoplay = () => {
    const {user} = useAuthContext()
  return (
    <>
    <section>
        <div className="social-1">
            <h1>
                Welcome to Wordle Clone! 
                You are trying to guess a five letter word chosen daily
            </h1>
                <ul>
                    <li>
                        <h4>
                            First, log in or sign up
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Secondly, choose a valid five letter word you before is correct
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Third, if your guess had a letter on the correct location, while show up as green, if it is in the
                            word but not in the correct location, it will be orange. Otherwise it will be gray
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Try your best and see who has the longest streak
                        </h4>
                    </li>
                </ul>
        </div>
    </section>
    </>
  );
};

export default Howtoplay