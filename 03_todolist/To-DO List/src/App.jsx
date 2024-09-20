import React from 'react'
import Main from './components/Main'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='w-full h-screen bg-[#686D76] p-2 text-white flex justify-center py-20'>
      <Main/>
      <ToastContainer/>
      
    </div>
  )
}

export default App
