import React, { createContext, useContext, useState } from 'react'


export const UserContext=createContext();
const Context = (props) => {

    const [user,setUser]=useState([
        {id:0,name:"Rishant",city:"Patna"}
    ]);
    // we normally create data using use staate and then pass using value and we can call it anywhere we are also passing the fxn
    // from which we can change it 
    // we can call data anywhere without doing props drilling or passing down the line to children then grandchildren and then so on

  return (
    <UserContext.Provider value={{user,setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context;

