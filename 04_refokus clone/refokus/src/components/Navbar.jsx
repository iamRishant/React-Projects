import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl  mx-auto py-6 flex gap-20  justify-between border-b-[1px] border-zinc-600'>

    <div className='nleft flex items-center gap-20'>

    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
    <div className='links flex gap-14 ml-5'>

    {["Home","Work","About","","News"].map((elem,index)=>{
        return elem.length==0 ? (<span className='w-[1px] h-6 bg-zinc-700'></span>) : (<a href="" className='text-sm flex items-center gap-2  '>{index===1 && <span style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block h-1 w-1 bg-[#00FF19] rounded-full'></span>}{elem}</a>)
    })}
    </div>
    </div>
    <Button/>
    
      
    </div>
  )
}

export default Navbar
