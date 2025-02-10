import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Products from './components/Products/products';
import Bid from './components/Bid/Bid';

import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Footer/Footer';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';

const MyRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bid" element={<Bid />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MyRoutes;
