import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'

const App = () => {
  return (
    <div className='w-full'>
        <Nav/>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
    </div>
  )
}

export default App
