import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'

const Elements = ({task,index,handleEdit}) => {

    const {todo,setTodo}=useContext(UserContext);
    const [check,setCheck]=useState(false);
    

    const handleDelete=(idx)=>{
        {
            const data=todo.filter((item,ind)=>ind!=idx);
            setCheck(false);
            setTodo(data);
            localStorage.setItem("work",JSON.stringify(data));
        }
    }

  return (
    <div className={`mt-5  text-white px-5 py-3 justify-between shadow-xl rounded-lg ${check ? "bg-green-400":"bg-orange-300"} flex`}>

        <div className='flex gap-4 justify-center items-center '>
            <input checked={check && "true"} type="checkbox" onChange={()=>setCheck(!check)} />
            <h1 className={`text-3xl text-left ${ check && "line-through"}  break-all whitespace-normal`}>{task}</h1>
        </div>
        <div className='flex items-start justify-center gap-5'>
            {!check && <button onClick={()=>{handleEdit(index)}} className='bg-green-300 rounded-md px-2 py-1 text-black hover:scale-95 duration-150'>Edit</button> }
            <button onClick={()=>{handleDelete(index)}} className='bg-red-700 py-1 px-2 rounded-md text-white hover:scale-95 duration-150'>Delete</button>
        </div>
    </div>
  )
}

export default Elements
