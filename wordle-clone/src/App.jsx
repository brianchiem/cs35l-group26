import Navbar from './pages/Navbar.jsx';
import Game from './pages/Game.jsx'
import Leaderboards from './pages/Leaderboards.jsx';
import Social from './pages/Social.jsx';
import { useState, useEffect } from 'react';
import WordBank from './components/WordBank.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Game solution={solution}/>}/>
            <Route path="Leaderboards" element={<Leaderboards />}/>
            <Route path='Social' element={<Social />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}


export default App
