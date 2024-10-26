
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
import FAQ from './pages/FAQ.jsx';
//
import EditUsername from './pages/EditUsername.jsx';
//


import { useState, useEffect } from 'react';
import WordBank from './components/WordBank.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext.js'
import useDate from './hooks/useDate.js';

const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26-1.onrender.com" : "api"

function App() {

  const { user } = useAuthContext()
  const [word, setWord] = useState(null)
  const [ystword, setYstWord] = useState(null)

  let today = useDate(),
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
  const date = year + month + day
  // console.log(date)

  // SETTING THE DATE \\
  // 1. This currently is grabbing the current day in order to grab today's word. Default settings for normal operation
  // const d = useDate()
  // let date = d.toISOString().slice(0,10).replaceAll('-', '')
  // console.log(d)

  // 2. To change the date for testing purposes, see hooks/useDate.js


  useEffect(() => {
    const fetchWord = async () => {
        const response = await fetch("https://cs35l-group26.onrender.com/word/" + date) 
        const json = await response.json()

        if (response.ok) {
          setWord(json.word)
          setYstWord(json.ystword)
          // console.log("Today's Word: ", json.word)
          // console.log("Yesterday's Word: ", json.ystword)
        }
    }

    fetchWord()
}, [])

  
                const router = createBrowserRouter(
                  createRoutesFromElements(
                    <Route path='/' element={<MainTemplate/>}>
                    <Route index element={!user ? <HomePage /> : <Navigate to="/login"/>} />
                    <Route path='/Game' element={user ? <Game solution={word} ystword={ystword}/> : <Navigate to="/"/>}/>
                    <Route path='/Leaderboards' element={user ? <Leaderboards /> : <Navigate to="/"/>}/>
                    <Route path='/Social' element={user ? <Social solution={word}/> : <Navigate to="/"/>}/>
                    {/* <Route path='/:username' element={user ? <ProfilePage solution={word}/> : <Navigate to="/login"/>}/> */}
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/Game"/>}/>
                    <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/Game"/>}/>
                    <Route path='/Profile' element={user ? <Profile /> : <Navigate to="/"/>}/>
                    <Route path='/How-to-Play' element={<Howtoplay/>}/>
                    <Route path='/FAQ' element={<FAQ/>}/>
                    <Route path='/edit-username' element={user ? <EditUsername /> : <Navigate to="/"/>}/> {/* new route for username edit */}
                    <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                  )
                );

        return <RouterProvider router={router}/>;

};
            



export default App


 
