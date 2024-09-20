import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Get Started"}) => {
  return (
    <div className='w-40 bg-zinc-100 px-5 py-3 rounded-full text-black flex justify-between items-center'>
      <span className='text-sm font-medium'>{title}</span>
      <IoIosReturnRight/>
    </div>
  )
}

export default Button
