import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// this is like state ---------------------------------------------------------
export const counterSlice=createSlice({
    // this is like state name and its initial value and reducers are fxns which can be applied to this state
    name: 'counter',
    initialState: {
    value: 0,
  },

  reducers:{
    increment:(state)=>{
        state.value += 1
    },
    decrement:(state)=>{
        state.value -= 1
    },
    // if udhr se koi fxn me data aata hai to action.payload me aata hai and state current state hota hai
    incrementByValue:(state,action)=>{
        console.log(action);
        state.value += action.payload;
    }
  }
})
// -------------------------------------------------------

// now we have to export reducer and action 
export const {increment,decrement,incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;
// we export in const coz we dont want ki jo inn fxns ko import kre wo isko re assign krde thats why we export in const format