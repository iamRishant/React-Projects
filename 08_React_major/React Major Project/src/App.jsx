import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Comoponents/Home'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#201f1ff8] flex'>
    
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
