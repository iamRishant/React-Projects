import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products,setProduct]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isError,setError]=useState(false);
  // ye upar ka jo 3 facitlity hai wo sbb hmko pehle se well optimised calling se lekr api se aaya hua data loading, error 
  // sbb kucch ka value react query ke help se easily mil jata hai so khud se manually nhi krna pdega itna..juse use react query

  useEffect(()=>{
    // IIFE ()()
    ;(async()=>{
      try {
        setIsLoading(true);
        setError(false);
        const response= await axios.get('https://fakestoreapi.com/products');
        setProduct(response.data);
        console.log(response.data);
        setIsLoading(false);

        
        
      } catch (error) {
        setError(true);
        console.log(error);
        
      }
    })()
  },[])

  if(isError){
    return <h1 className='text-4xl'>Oops there is an error</h1>
  }

  return (
    <div>
    {isLoading ? <h1 className='text-5xl'>Loading...</h1>:
      <h1 className='text-6xl'>Total Number of products are: {products.length}</h1>
    }
      
    </div>
  )
}

export default App
