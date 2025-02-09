import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Products from './components/Products/products';
import Bid from './components/Bid/Bid';

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bid" element={<Bid />} />
        {/* <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} /> */}
      </Routes>
    </>
  )
}

export default MyRoutes
