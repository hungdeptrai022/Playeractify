import React, { useContext,useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'


const App = () => {

  const {audioRef,track} = useContext(PlayerContext) 

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      {/* <Router>
      <Routes>
        <Route path='/login' element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path='/register' element={<RegisterPage setIsAuthenticated={setIsAuthenticated}/>}></Route>
      </Routes>
    </Router> */}
    </div>
    
  )
}

export default App