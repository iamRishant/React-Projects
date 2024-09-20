import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    const {name}=useParams();
    const navigate=useNavigate();
    // console.log(name);
    const goBackHandeler=()=>{
        navigate(-1);//this is used to go one page behind 
        // or we can use
        // navigate("/userdetails");// this can help to navigate anywhere
    }   


  return (
    <div className='w-full'>
      <h1>Welcome, {name}</h1>
      <button onClick={goBackHandeler} className='px-4 py-2 bg-red-500'>Go Back</button>
    </div>
  )
}

export default User
