import React, { useState } from 'react'

const Elements = ({item,index,onDelete,onEdit}) => {
  const [tick,setTick]=useState(false);
    const handleChange=()=>{
        setTick(!tick);
    }
    
  return (
    <div className='elements bg-[#7E8EF1] flex items-center justify-between w-full mb-4  rounded-lg p-4'>
            <div className={`flex items-center gap-4 justify-start text-left ${tick && "line-through decoration-[#000] decoration-4"}`}>
              <input onChange={handleChange} className='w-[30px] h-[30px] shrink-0' type="checkbox" />
              <h1 className='text-[#EEEEEE] text-2xl tracking-tight leading-none'>{item}</h1>
            </div>
            <div className='buttons flex items-center gap-5 ml-5'>
                <button onClick={()=>onEdit(index)}  className='px-5 py-3 bg-[#D1D8C5] rounded-xl font-semibold text-xl '>Edit</button>
                <button onClick={()=>onDelete(index)}  className='px-5 py-3 bg-[#D1D8C5] rounded-xl text-black font-semibold text-xl'>Delete</button>
            </div>

    </div>
  )
}

export default Elements
