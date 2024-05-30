import Navbar from './components/Navbar.jsx';

// pages
import Game from './pages/Game.jsx'
import Leaderboards from './pages/Leaderboards.jsx';
import Social from './pages/Social.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
//


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
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Navbar />}>
    //         <Route index element={<Game solution={solution}/>}/>
    //         <Route path="/Leaderboards" element={<Leaderboards />}/>
    //         <Route path='/Social' element={<Social />}/>
    //         <Route path="/login" element={<Login />}/>
    //         <Route path="/signup" element={<Signup />}/>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>

      <div className='App'>
        <BrowserRouter>
          <Navbar/>
            <div className='pages'>
              <Routes>
                <Route path="/" element={<Game solution={solution}/>}/>
                <Route path="/Leaderboards" element={<Leaderboards />}/>
                <Route path='/Social' element={<Social />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
              </Routes>
            </div>
        </BrowserRouter>
      </div>
      
    // </>
  )
}


export default App
