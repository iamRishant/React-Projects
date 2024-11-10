import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './store/reducer/counterSlice';

const App = () => {

  // lets bring data from the store using collector
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();// used to dispatch action that make change in reducer and that further get stored in store
  return (
    <div className='h-screen'>
      <h1 className='text-5xl bg-[#000001] text-center text-white'>
        {count}
      </h1>      
      <div className='flex justify-center'>
        <button className='px-2 py-1 bg-white text-black border-2  border-black' onClick={()=>dispatch(increment())}>+1</button>
        <button  className='px-2 py-1 bg-white text-black border-2  border-black'onClick={()=>dispatch(decrement())}>-1</button>
        <button className='px-2 py-1 bg-white text-black border-2  border-black' onClick={()=>dispatch(incrementByValue(5))}>+5</button>
      </div>
    </div>
  )
}

export default App
