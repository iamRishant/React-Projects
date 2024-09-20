import React, { useEffect, useState } from 'react'
import Sidenav from './template/Sidenav'
import TopNav from './template/TopNav'
import axios from '../utils/axios'
import Header from './template/Header'
import HorizontalCards from './template/HorizontalCards'

const Home = () => {
    document.title="Homepage"

    const [wallpaper,setWallpaper]=useState(null)
    const [trending,setTrending]=useState(null)

    const getWallpaper=async()=>{
      try {
        const {data}= await axios.get(`/trending/all/day`);
        let randomNumber=(Math.random()*data.results.length).toFixed();
        let randomData=data.results[randomNumber];
        setWallpaper(randomData);
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    const getTrending=async()=>{
      try {
        const {data}= await axios.get(`/trending/all/day`);
        setTrending(data.results);
      } catch (error) {
        console.log("Error: " + error);
      }
    }


    useEffect(()=>{
      !wallpaper && getWallpaper()
      !trending && getTrending()
    },[])
  return wallpaper && trending ? (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <TopNav/>
        <Header data={wallpaper}/>
        <HorizontalCards data={trending}/>
      </div>
    </>
  ): <h1>Loading</h1>
};

export default Home
