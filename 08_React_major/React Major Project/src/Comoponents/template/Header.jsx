import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    console.log(data);
  return (
    <div style={
        {
            background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition:"top",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"

        }
    } className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>
      <h1 className='text-5xl text-white font-bold  w-[80%]'>{data.name || data.title || data.original_name || data.original_title}</h1>
      <p className='text-white w-[70%] mt-3'>{data.overview.slice(0,200)} . . . <Link className='text-blue-400'>More</Link></p>
      <Link className='p-3 bg-blue-600 text-white font-semibold mt-2 rounded'>Watch Trailer</Link>
    </div>
  )
}

export default Header
