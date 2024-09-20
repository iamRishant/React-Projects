import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteitem } from '../store/reducers/UserReducer'

const Users = () => {

  const {users}=useSelector((state)=>state.UserReducer);
  // console.log(users);
  const dispatch=useDispatch();

  const DeleteHandler=(index)=>{
    // console.log(index);
    dispatch(deleteitem(index));

  }

  return (
    <div>
      <h1 className='text-4xl'>Lets Learn Redux</h1>
      {
        users.map((user,index)=> <h1>{user.name} <span onClick={()=>DeleteHandler(index)} className='text-red-500 font-bold text-xl cursor-pointer'>  X</span>  </h1>)
      }
    </div>
  )
}

export default Users
