import React, { useContext } from 'react'
import { UserContext } from '../context/Context'

const Users = () => {

    const {user,setUser}=useContext(UserContext);//this is how we call data from context
    console.log(user);
    
  return (
    <div>
      <h1>{user[0].name}</h1>
    </div>
  )
}

export default Users
