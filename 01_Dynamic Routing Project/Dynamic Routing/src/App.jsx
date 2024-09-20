import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import UserDetails from './Components/UserDetails'
import Contacts from './Components/Contacts'
import User from './Components/User'

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      <nav className='w-full border-2 flex items-center justify-center gap-5 px-8 py-4'>
        <NavLink className={(e)=>{return [e.isActive?"text-black font-semibold text-3xl":"text-black opacity-70 text-3xl"].join(" ")}} to="/">Home</NavLink>
        <NavLink className={(e)=>{return [e.isActive?"text-black font-semibold text-3xl":"text-black opacity-70 text-3xl"].join(" ")}} to="/about">About</NavLink>
        <NavLink className={(e)=>{return [e.isActive?"text-black font-semibold text-3xl":"text-black opacity-70 text-3xl"].join(" ")}} to="/userdetails">User Details</NavLink>
        <NavLink className={(e)=>{return [e.isActive?"text-black font-semibold text-3xl":"text-black opacity-70 text-3xl"].join(" ")}} to="/contacts">Contacts</NavLink>
      </nav>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        {/* <Route path='/userdetails' element={<UserDetails/>}/> */}
        {/* <Route path='/userdetails/:name' element={<User/>}/> */}

        {/* note if we want to open in the same page we have to use outlet on the link page and here we have to declare append route inside that page */}
        <Route path='/userdetails' element={<UserDetails/>}>
          <Route path='/userdetails/:name' element={<User/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
