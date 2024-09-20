import React from 'react'

const HorizontalCards = ({data}) => {
  return (
    <div className='w-full  p-5' >
      
      <div className='mb-4'>
        <h1 className='text-3xl font-semibold  text-zinc-400'>
            Trending
        </h1>
      </div>
      <div className='w-[100%] flex h-[40vh] overflow-y-hidden'>
            {
                data.map((d,i)=>(
                    <div key={i} className='min-w-[15%] mr-3 bg-zinc-900'>
                        <img className='h-[45%] w-full object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
                        <h1 className='text-xl text-white font-semibold'>{d.name || d.original_name || d.title || d.original_title}</h1>
                        <p className='text-white mt-3 mb-5'>{d.overview.slice(0,50)} . . . <span className='text-blue-400'>More</span></p>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default HorizontalCards
