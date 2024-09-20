import React, { useEffect } from 'react'
import { getProducts } from '../store/reducers/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncproductaction } from '../actions/ProductAction'


const Products = () => {

    const dispatch=useDispatch();

    const {products}=useSelector((state)=>state.ProductReducer);
    console.log(products);

    useEffect(()=>{
        // dispatch(getProducts());
        dispatch(asyncproductaction())
    },[])

  return (
    <div className=''>
        <h1>Products Section</h1>
        {
            products.map((prod,index)=><h1>{prod.title}</h1>)
        }
      
    </div>
  )
}

export default Products
