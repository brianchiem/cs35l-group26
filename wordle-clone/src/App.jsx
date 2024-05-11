import Navbar from './components/navbar.jsx'
import Grid from './components/grid.jsx'
import Game from './components/game.jsx'
import { useState, useEffect } from 'react';

function App() {
  const [solution, setSolution] = useState(null)

  // Handle Solution //

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  
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

const tempWordBank = [
  'ninja', 'hunch', 'karma', 'manly', 'lorem'
]

export default App
