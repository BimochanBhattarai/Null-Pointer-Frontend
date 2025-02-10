import React from 'react';
import Product from './product';

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700">Available Waste Products</h2>
        <p className="text-gray-600 mt-2">
          Explore our collection of recyclable and reusable waste materials to contribute to a sustainable future.
        </p>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;