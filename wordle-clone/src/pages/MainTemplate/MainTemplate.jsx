import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar
from '../../components/Navbar'

const MainTemplate = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainTemplate