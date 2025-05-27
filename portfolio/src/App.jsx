import { Routes, Route } from 'react-router-dom'
import React from 'react'
import UnderConstruction from './pages/UnderConstruction'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<UnderConstruction />} />
    </Routes>
  )
}

export default App