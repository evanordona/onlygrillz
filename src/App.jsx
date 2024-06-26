
import { useEffect, useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Home from './components/Home'
import Explore from './components/Explore'
import Notifications from './components/Notifications'
import JoeAi from './components/JoeAi'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Login from './components/Login'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/createpost' element={<CreatePost />} />
        <Route exact path='/notifications' element={<Notifications />} />
        <Route exact path='/joeai' element={<JoeAi />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
