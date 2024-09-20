import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div className='flex justify-center flex-col text-center'>
      <h1 className='text-4xl'>Welcome to User Details</h1>
      <div className='flex w-full mt-10 border-2'>
        <div className='w-1/2 flex flex-col'>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/goku">Goku</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/ben10">Ben 10</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/ironman">Iron Man</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/flash">Flash</NavLink>
        </div>
        <div className='w-1/2 flex flex-col'>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/frieza">Frieza</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/kevin11">Kevin 11</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/warmachine">War Machine</NavLink>
            <NavLink className="p-2 border-2 hover:bg-gray-700 hover:text-white" to="/userdetails/reverseflash">Reverse Flash</NavLink>
        </div>
      </div>

      {/* if we want to open in the same page then we just have to nest the route and write outlet here */}
      <Outlet/>y
    </div>
  )
}

export default UserDetails
