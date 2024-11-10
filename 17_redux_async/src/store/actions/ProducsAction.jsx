import axios from 'axios';
import { getProducts } from '../reducers/ProductReducer';
// higher order fxn
export const asyncProduct=()=> async (dispatch,getState)=>{
    try {
        const {data}=await axios.get('https://fakestoreapi.com/products');
        // console.log(data);

        // since this is async fxn we cannot write this action directly so we will write is seperately aur jab data aajaega then simply assign krr lenge
        // now we have the data we can diretly call or dispatch the action

        dispatch(getProducts(data));
        
    } catch (error) {
        console.log(error);
        
    }
}