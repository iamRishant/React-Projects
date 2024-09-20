import React from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import Data from './Components/Data'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Hire from './Components/Hire'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Data/>
      <Button/>



      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Hire Me' element={<Hire/>}/>
      </Routes>
    </div>
  )
}

export default App
