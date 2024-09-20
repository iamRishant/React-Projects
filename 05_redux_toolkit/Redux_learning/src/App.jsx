import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/reducers/counterSlice';

const App = () => {
  const dispatch=useDispatch();
  const {value}=useSelector((state)=>state.counter);
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center flex-col'>
      <div className='bg-white text-black p-10 flex items-center justify-center'>
       <h1 className='text-5xl'> counter:{value}</h1>
      </div>
      <div className='bg-white text-black p-12 flex flex-col gap-5'>
        <button onClick={()=>dispatch(increment())} className='px-5 py-3 bg-black text-white rounded-md '>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='px-5 py-3 bg-black text-white rounded-md '>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className='px-5 py-3 bg-black text-white rounded-md '>Increment by 5</button>
      </div>
    </div>
  )
}

export default App
