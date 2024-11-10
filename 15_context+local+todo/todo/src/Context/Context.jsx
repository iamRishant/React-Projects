import React, { createContext, useContext, useState } from 'react'


export const UserContext=createContext();
const Context = (props) => {

    const localData=localStorage.length>0 && JSON.parse(localStorage.getItem("work"));

    const [todo,setTodo]=useState(localData || []);

    

  return (
    <UserContext.Provider value={{todo,setTodo}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context;

