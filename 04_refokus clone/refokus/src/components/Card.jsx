import {  motion } from 'framer-motion';
import React from 'react'
import { GoArrowRight } from "react-icons/go";
motion
const Card = ({width,start,contact,para,hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover===true && "#7443FF",padding:"25px"}} className={`${width} bg-zinc-700 p-5 rounded-xl flex flex-col justify-between min-h-[30rem] `} >
    <div>
        <div className='w-full flex justify-between items-center'>
            <h3 className='text-sm'>This is h3</h3>
            <GoArrowRight/>
        </div>
        <h1 className='text-3xl font-semibold mt-4'>This is bigger Heading</h1>
    </div>

    <div>
    {start && <h1 className='text-8xl font-semibold tracking-tight'>Start a Project</h1>}
    {contact && <button className='px-5 py-2 border-[1px] rounded-full mt-3'>Contact Us</button>}
    {para && <p className='text-sm text-zinc-400 leading-none mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>}
    </div>

    </motion.div>
  )
}

export default Card
