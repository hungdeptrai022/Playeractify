import React, { useContext,useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'


const App = () => {

  const {audioRef,track} = useContext(PlayerContext) 

  
  return (
    <div >
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
        </Routes>
        
    </div>
    
  )
}

export default App