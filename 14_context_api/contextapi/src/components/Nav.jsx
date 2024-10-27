import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Nav = () => {
  return (
    <div className='bg-black text-white h-[10vh] flex justify-center items-center gap-5 text-3xl'>
        <Link to="/" className='hover:scale-110 duration-100'>Home</Link>
        <Link to="/users" className='hover:scale-110 duration-100'>User</Link>
        
      
    </div>
  )
}

export default Nav
