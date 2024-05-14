import Navbar from './components/navbar.jsx'
import Game from './components/Game.jsx'
import { useState, useEffect } from 'react';
import WordBank from './components/WordBank.jsx';

function App() {
  const [solution, setSolution] = useState(null)

  // Handle Solution //

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  const tempWordBank = WordBank()
  
  useEffect(() => {
    setSolution(tempWordBank[getRandomInt(tempWordBank.length)].toUpperCase())
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
