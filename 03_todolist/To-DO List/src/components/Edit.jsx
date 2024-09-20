import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const Edit = ({editIndex,editText,editHandler,onEdit}) => {
    const [edittedText,setEdittedText]=useState(editText);
  return (
    <div className=' fixed inset-0 flex items-center flex-col bg-zinc-700 bg-opacity-80'>
            <div className='w-[60vw] bg-[#7E8EF1] p-20 relative mt-20 rounded-lg' >
                    <RxCross1 onClick={onEdit}  className='text-4xl font-bold absolute top-3 right-3 text-black cursor-pointer hover:scale-110   '/>
                <div className='flex justify-between items-center'>
                    <input onChange={(e)=>setEdittedText(e.target.value)} className='w-[80%] p-3 text-black text-3xl bg-slate-300'  type="text" value={edittedText} />
                    <button onClick={()=>editHandler(editIndex,edittedText)} className='px-6 py-3 text-3xl bg-[#D1D8C5] text-black rounded-xl'>Edit</button>
                </div>
            </div>
    </div>
  )
}

export default Edit
