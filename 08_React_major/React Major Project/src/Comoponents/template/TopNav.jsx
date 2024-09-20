import axios from '../../utils/axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/images.png'

const TopNav = () => {
    const [query,setQuery]=useState("");
    const [searchResult,setSearchResult]=useState([]);

    const GetSearches=async()=>{
      try {
        const {data}= await axios.get(`/search/multi?query=${query}`);
        // console.log(d);
        // console.log(data.results);
        setSearchResult(data.results);
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    useEffect(()=>{
      GetSearches();
    },[query])

  return (
    <div className='w-full h-[10vh] relative flex px-[15%] items-center  '>

    
    <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input value={query} onChange={(e)=>{setQuery(e.target.value)}} className='text-white p-2 mx-2 w-[50%] text-xl border-none outline-none bg-transparent' type="text" placeholder='Search Anything' />
      {query.length>0 && <i onClick={()=>{setQuery("")}} className="text-2xl text-zinc-400 ri-close-line"></i>}
      

      <div className='absolute bg-zinc-400 w-[50%] max-h-[50vh] top-[100%] overflow-auto'>
      {
        searchResult.map((ele,index)=><Link key={index} className='w-[100%]  p-6 flex justify-start items-center border-b-2 border-zinc-200 hover:font-semibold hover:bg-zinc-300 duration-300'>
            <img className='w-[12vh] h-[12vh] mr-5 object-cover' src={
              (ele.backdrop_path || ele.profile_path) ? 
              `https://image.tmdb.org/t/p/original/${ele.backdrop_path || ele.profile_path}`:noimage} alt="" />
            <span>{ele.name || ele.title || ele.original_name || ele.original_title}</span>
            
        </Link>)
      }
        
      </div>
    </div>

  )
}

export default TopNav
// max height ka mtlb jab tk content nhi hoga to height 0 rhega