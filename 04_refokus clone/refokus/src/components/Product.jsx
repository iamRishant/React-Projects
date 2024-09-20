import React from 'react'
import Button from './Button.jsx'
const Product = ({item,count,mover}) => {

  const {title,description,btn1,btn2}=item;
  // console.log(count);
  return (

    <div onMouseEnter={()=>mover(count)} className='w-full h-[23rem] py-20 text-white '>
    <div  className='max-w-screen-xl  mx-auto flex items-center justify-between px-15 py-10'>
        <h1 className='text-6xl capitalize font-semibold'>{title}</h1>
        <div className='det w-1/3'>
            <p className='mb-10 leading-5'>{description}</p>
            <div className='flex items-center mt-5 gap-10'>
              {btn1 && <Button/>}
              {btn2 && <Button title={"Case Study"}/>}
            </div>
            
        </div>
    </div> 
    </div>
  )
}

export default Product
