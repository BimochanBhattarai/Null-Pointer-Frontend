import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Products from './components/Products/products';
import Navbar from './Navbar/Navbar';


const MyRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} /> */}
      </Routes>
    </>
  )
}

export default MyRoutes
