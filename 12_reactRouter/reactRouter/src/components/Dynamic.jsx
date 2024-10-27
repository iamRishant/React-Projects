import React from 'react'
import { Link } from 'react-router-dom'

const Dynamic = () => {

  return (
    <div className='h-[50vh] bg-slate-400'>
      <h1 className='text-white text-3xl p-5 text-center underline'>This page is for dynamic routing</h1>

      <div className='flex text-center justify-center gap-10 w-full'>
        <Link to="/dynamic/Rishant Coder" className='px-2 py-1 text-white bg-black hover:scale-105 duration-100'>Rishant Coder</Link>
        <Link to="/dynamic/Rishant Trader" className='px-2 py-1 text-white bg-black hover:scale-105 duration-100'>Rishant Trader</Link>
        <Link to="/dynamic/Rishant Boxer" className='px-2 py-1 text-white bg-black hover:scale-105 duration-100'>Rishant Boxer</Link>
        
      </div>
    </div>
  )
}

export default Dynamic
