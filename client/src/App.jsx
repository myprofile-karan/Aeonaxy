import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CreateProfilePage from './components/CreateProfilePage'
import LookingFor from './components/LookingFor'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/create-profile/:username' element={<CreateProfilePage />} />
            <Route path='/looking-for/:username' element={<LookingFor />} />
            <Route path='/user-profile/:username' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>


      <Toaster />
    </div>
  )
}

export default App
