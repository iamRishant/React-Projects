import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'


const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-4'>
        <h1 className='text-3xl text-white '>
        <i class="ri-tv-fill text-[#7947BD] mr-3" ></i>
        <span className='font-bold'>ABCDE</span>
        </h1>
        <nav className='text-zinc-400 flex flex-col gap-2'>
          <h1 className='text-xl font-bold mt-10 mb-1 text-white'>News Feed.</h1>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Trending</Link>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Most Watched</Link>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Most Popular</Link>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Tv Shows</Link>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Movies</Link>
          
        </nav>
        <hr className='mt-5 border-none bg-zinc-400 h-[1px]' />
        <nav className='text-zinc-400 flex flex-col gap-2'>
          <h1 className='text-xl font-bold mt-5 text-white'>Website Information.</h1>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>About ABCDE</Link>
          <Link className='hover:bg-[#7947BD] p-4 hover:text-white hover:scale-105 rounded-lg duration-300 '>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Sidenav
