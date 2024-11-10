import React, { useContext, useState } from 'react'
import Elements from './Elements'
import { UserContext } from '../Context/Context';
import Edit from './Edit';

const Add = () => {
    const [Ip, setIp] = useState('');
    const {todo,setTodo}=useContext(UserContext);
    const [editIndex,setEditIndex]=useState(null);
    const [edit,setEdit] = useState(false);
    


    localStorage.setItem("work",JSON.stringify(todo));


    const handleAdd=()=>{
        if(Ip.length>0){
            setTodo((prev)=>[...prev,Ip])
            setIp('');
        }
        else alert("Please add data");
    }

    const handleEdit=(index)=>{
      setEditIndex(index);
      setEdit(true);
    }
    

  return (
    <div className='w-full bg-purple-300 min-h-screen absolute'>
      <div className=' mt-[10vh] w-[40%] mx-auto text-center'>
        <h1 className='text-5xl font-bold'>Advanced Todo List</h1>
        <div className='flex mt-5'>
            <input value={Ip} onChange={(e)=>setIp(e.target.value)} type="text" className='px-3 py-2 w-full outline-none rounded-md text-xl font-semibold' placeholder="Add today's work..." />
            <button onClick={handleAdd} className='px-4 py-2 bg-red-300 text-2xl'>Add</button>
        </div>
        {
            todo.length===0 ?
            <h1 className='text-2xl mt-5'>Add Task...</h1>:
            todo.map((item,index)=>{
                return <Elements key={index} index={index} task={item} handleEdit={handleEdit}/>
            })

        }
        {
          edit && <Edit idx={editIndex} setEdit={setEdit}/>
        }
        
        
        
        

      </div>
    </div>
  )
}

export default Add
