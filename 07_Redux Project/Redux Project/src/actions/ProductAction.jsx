import axios from "axios";
import { getProducts } from "../store/reducers/ProductReducer";

export const asyncproductaction= ()=> async (dispatch,getState)=>{
    // const dispatch=useDispatch();
    console.log(getState());
    try {
        const response=await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        dispatch(getProducts(response.data))
        
        
    } catch (error) {
        console.log(error);
    }
}

// as we all kknow hooks sirf component ke andr hi kaam krega but yha koi component hai nhi and we have to use dispatch hook so we will use higher order functions which is a function which returns another function

// function a(){
// return function B}

//  or ()=>()=>{} thats why we will make out fxn higher ordre