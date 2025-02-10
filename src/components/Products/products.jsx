import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = ({ excludeProductId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('excludeProductId:', excludeProductId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/products');
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch products');
        }
        const productsData = data.data.map((product) => ({
          ...product,
          currentBid: product.lastBidAmount,
        }));
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <p className="ml-4 text-green-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 font-semibold">Error: {error}</p>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700">
          Available Waste Products
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our collection of recyclable and reusable waste materials to
          contribute to a sustainable future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products
          .filter((product) => product._id !== excludeProductId)
          .map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
