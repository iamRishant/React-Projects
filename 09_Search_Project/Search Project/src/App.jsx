import axios from './utils/axios'
import React, { useEffect, useState } from 'react'
import noimage from '/images.png'

const App = () => {
  const [query,setQuery]=useState("")
  const [apiData,setApiData]=useState([]);
  // console.log(query);


  const getData= async ()=>{
    try {
      const {data}=await axios.get(`/search/multi?query=${query}`);
      console.log(data.results);
      setApiData(data.results);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  useEffect(()=>{
    getData();
  },[query])
  return (
    <div className='w-full h-screen bg-white'>
      <div className='h-[20vh] flex pl-[30%] items-center gap-5'>
      
        <i class="ri-search-line text-3xl"></i>
        <input value={query} onChange={(e)=>{setQuery(e.target.value)}} className='w-[60%] text-2xl p-2 rounded-lg outline-none' placeholder='Search Movies' type="text"  />
        {query.length>0 && <i onClick={()=>{setQuery("")}} class="ri-close-line text-3xl"></i>}
      </div>
      <div className='bg-zinc-200 w-[70%] max-h-[70vh] mx-auto px-5 flex justify-start gap-5 flex-wrap overflow-auto shadow-xl rounded-lg'>
        {
          apiData.map((ele,ind)=>{
            return <div className='bg-white mt-5 h-[30vh] w-[25vh] p-3 shadow-xl hover:scale-110 duration-300'>
          <img className='h-[80%] bg-contain w-[100%]' src={
              (ele.backdrop_path || ele.profile_path) ? 
              `https://image.tmdb.org/t/p/original/${ele.backdrop_path || ele.profile_path}`:noimage} alt="" />
          <h1 className='text-center h-[20%] text-xs leading-5 text-wrap w-[100%] mt-1'>{ele.name || ele.original_name || ele.title || ele.original_title}</h1>
        </div>
          })
        }
        
      </div>
    </div>
  )
}

export default App
