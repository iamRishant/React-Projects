import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Products from './components/Products'

const App = () => {
  return (
    <div className='h-screen w-screen '>
      <nav className='flex py-5 justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
