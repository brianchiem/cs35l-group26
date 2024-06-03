
// pages
import Game from './pages/Game.jsx'
import Leaderboards from './pages/Leaderboards.jsx';
import Social from './pages/Social.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import Howtoplay from './pages/Howtoplay.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import MainTemplate from './pages/MainTemplate/MainTemplate.jsx';
import HomePage from './pages/HomePage.jsx';
//


import { useState, useEffect } from 'react';
import WordBank from './components/WordBank.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext.js'


function App() {

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

  const date = "20240604"




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

  
                const router = createBrowserRouter(
                  createRoutesFromElements(
                    <Route path='/' element={<MainTemplate/>}>
                    <Route index element={ <HomePage/>} />
                    <Route path='/Game' element={user ? <Game solution={word} ystword={ystword}/> : <Navigate to="/login"/>}/>
                    <Route path='/Leaderboards' element={user ? <Leaderboards /> : <Navigate to="/login"/>}/>
                    <Route path='/Social' element={user ? <Social solution={word}/> : <Navigate to="/login"/>}/>
                    {/* <Route path='/:username' element={user ? <ProfilePage solution={word}/> : <Navigate to="/login"/>}/> */}
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/Game"/>}/>
                    <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/Game"/>}/>
                    <Route path='/Profile' element={user ? <Profile /> : <Navigate to="/login"/>}/>
                    <Route path='/How-to-Play' element={<Howtoplay/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                  )
                );

        return <RouterProvider router={router}/>;

};
            



export default App


 
