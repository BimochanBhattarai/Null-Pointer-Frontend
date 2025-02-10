import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Products from '../components/Products/products';

const Buy = () => {
  return (
    <div>
      <Link to="/bid"> 
        <Products excludeProductId='123' />
      </Link>
    </div>
  );
};

export default Buy;