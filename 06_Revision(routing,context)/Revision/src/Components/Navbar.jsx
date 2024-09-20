import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='flex items-center justify-between px-10 py-5 bg-red-400 text-white'>
        <h1 className='text-5xl'>Rishant</h1>
        <div className='flex justify-center gap-5'>

        {
            ["Home","Contact","About","Hire Me"].map((ele)=>(<Link to={`/${ele}`} className='text-3xl hover:text-black'>{ele}</Link>))
        }
        </div>
       </div>
    </div>
  )
}

export default Navbar
 