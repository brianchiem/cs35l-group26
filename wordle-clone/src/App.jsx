import Navbar from './components/Navbar.jsx';

// pages
import Game from './pages/Game.jsx'
import Leaderboards from './pages/Leaderboards.jsx';
import Social from './pages/Social.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
//


import { useState, useEffect } from 'react';
import WordBank from './components/WordBank.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext.js'

function App() {
  // const [solution, setSolution] = useState(null)
  // const [localUser, setLocalUser] = useState(null)
  const { user } = useAuthContext()
  const [word, setWord] = useState(null)
  const [ystword, setYstWord] = useState(null)

  let today = new Date(),
  year = today.getFullYear().toString(),
  month = today.getMonth() + 1,
  day = today.getDate();
  if (day < 10) {
    day = "0" + day.toString()
  }
  else {
    day = day.toString()
  }
  if (month < 10) {
    month = "0" + month.toString() 
  }
  else {
    month = month.toString()
  }
  // const date = year + month + day
  const date = "20240604"

  // Handle Solution //

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max)
  // }
  // const tempWordBank = WordBank()
  
  // useEffect(() => {
  //   setSolution(tempWordBank[getRandomInt(tempWordBank.length)].toUpperCase())
  // }, []);

  useEffect(() => {
    const fetchWord = async () => {
        const response = await fetch('/api/word/' + date) 
        const json = await response.json()

        if (response.ok) {
          setWord(json.word)
          setYstWord(json.ystword)
          console.log("Today's Word: ", json.word)
          console.log("Yesterday's Word: ", json.ystword)
        }
    }

    fetchWord()
}, [])


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
                <Route path="/" element={user ? <Game solution={word} ystword={ystword}/> : <Navigate to="/login"/>}/>
                <Route path="/Leaderboards" element={user ? <Leaderboards /> : <Navigate to="/login"/>}/>
                <Route path='/Social' element={user ? <Social solution={word}/> : <Navigate to="/login"/>}/>
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>}/>
                <Route path='/Profile' element={user ? <Profile /> : <Navigate to="/login"/>}/>
              </Routes>
            </div>
        </BrowserRouter>
      </div>
      
    // </>
  )
}


export default App
