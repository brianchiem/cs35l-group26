import Navbar from './components/navbar.jsx'
import Game from './components/game.jsx'
import { useState, useEffect } from 'react';
import wordBank from './components/wordbank.jsx';

function App() {
  const [solution, setSolution] = useState(null)

  // Handle Solution //

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  const tempWordBank = wordBank()
  
  useEffect(() => {
    setSolution(tempWordBank[getRandomInt(tempWordBank.length)])
  }, []);

  // Handle Solution //

  return (
    <>
      <Navbar />
      
      <Game solution={solution}/>
    </>
  )
}


export default App
