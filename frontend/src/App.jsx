import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import { Route, Routes } from 'react-router-dom'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {

  return (
    <div>
     <Routes>
        <Route path='/login' element={<UserLogin />} />
        
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App