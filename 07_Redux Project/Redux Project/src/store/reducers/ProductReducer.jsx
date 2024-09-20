import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products: [],
}
export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            // console.log(action);
            state.products=action.payload;
        }
    },
})

export default productSlice.reducer;
export const {getProducts}  = productSlice.actions;