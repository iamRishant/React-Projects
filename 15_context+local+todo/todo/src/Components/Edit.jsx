import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'

const Edit = ({idx,setEdit}) => {
  const {todo,setTodo}=useContext(UserContext);
  const [currData,setCurrData]=useState(todo[idx]);

  const handleUpdate=()=>{
    const temp=todo.map((item,index)=> index==idx?currData:item);
    setTodo(temp);
    localStorage.setItem("work",JSON.stringify(todo));
    setEdit(false);
  }

 
  return (
    
    <div className=' h-screen w-screen top-0 left-0  z-10 fixed bg-black bg-opacity-[35%] inset-0 backdrop-blur-md ' >

      <div  className='w-[40vw] min-h-[25vh] absolute top-[35vh] left-[50vw] transform translate-x-[-50%] translate-y-[-50%] bg-gray-300 text-black p-5 rounded-md z-20'>
        
              <input type="text" value={currData} onChange={(e)=>setCurrData(e.target.value)} className='mt-5 rounded-md w-full p-2 text-xl outline-none' />
              <div className='flex gap-2 mt-5'>
              <button className='text-xl px-2 py-1 rounded-sm bg-green-500 text-white hover:scale-95 duration-150' onClick={handleUpdate}>Update</button>
              <button className='text-xl px-2 py-1 rounded-sm bg-red-500 text-white hover:scale-95 duration-150' onClick={()=>setEdit(false)}>Cancel</button>

              </div>
      </div>
    </div>
  )
}

export default Edit
