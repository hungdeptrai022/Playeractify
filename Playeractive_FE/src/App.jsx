import React, { useContext,useState } from 'react'
import { PlayerContext } from './context/PlayerContext'
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'


const App = () => {
  return (
    <div >
        <Routes>
          <Route path='*' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
        </Routes>     
    </div>
    
  )
}

export default App