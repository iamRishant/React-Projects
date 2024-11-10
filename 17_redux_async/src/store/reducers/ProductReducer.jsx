

// this is not static we are using api to call data and assign it to from producerAction we can also write that fxn here but it will
// just increase the code and decrese modularity

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[],
  }

  export const productSlice= createSlice({
    name: 'products',
    initialState,
    reducers: {
      getProducts: (state,action) => {
        console.log(action.payload);
        state.products = action.payload;
      },
    },
  })

  export default productSlice.reducer;
  export const {getProducts} =productSlice.actions;