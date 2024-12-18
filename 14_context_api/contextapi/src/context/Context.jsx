import React, { createContext, useContext, useState } from 'react'


export const UserContext=createContext();
const Context = (props) => {

    const [user,setUser]=useState([
        {id:0,name:"Rishant",city:"Patna"}
    ]);
    

  return (
    <UserContext.Provider value={{user,setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context;

