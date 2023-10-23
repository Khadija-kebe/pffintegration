import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './dashbord/admin'
import Eleveur from './dashbord/dashbordeleveur'
import Acceuil from './page/acceuil'
import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/eleveur" element={<Eleveur />} />
          {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  )
}

export default App
