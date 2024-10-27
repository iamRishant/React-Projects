import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DynamicUser = () => {
    const {name}=useParams();
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/dynamic");
        // navigate(-1);
    }

  return (
    <div className='h-[50vh] bg-slate-500 flex justify-center items-center gap-10'>
      <h1 className='text-4xl text-white'>Hello i am {name}</h1>
      <button onClick={handleClick} className='px-3 py-2 bg-black text-white rounded-md'>Go Back</button>
    </div>
  )
}

export default DynamicUser
