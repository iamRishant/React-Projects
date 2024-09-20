import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';





const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='text-xl bg-zinc-900 w-full  text-white font-["satoshi"] ' >
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  )
}

export default App
