import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Internal = () => {

    const {name}=useParams()
    const navigate=useNavigate();

    const handleClick=()=>{
        // navigate(-1) // Go back to previous page
        navigate("/dynamicinternal")
  
    }
  return (
    <div className='mt-5 bg-gray-300'>
      This is internal routing it means with in the same page this component will be rendered in place of Outlet

      <h1>Hi <span>{name}</span> </h1>
      <button onClick={handleClick} className='px-2 py-2 rounded-sm bg-black text-white mt-5'>Go back</button>
    </div>
  )
}

export default Internal
