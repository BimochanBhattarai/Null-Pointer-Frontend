import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);  // Holds fetched products
  const [loading, setLoading] = useState(true);    // Loading state
  const [error, setError] = useState(null);        // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/products");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }

        // Assuming your backend returns an object with a 'data' field containing an array of products.
        // Map through each product to add a 'currentBid' property (from lastBidAmount) for UI compatibility.
        const productsData = data.data.map(product => ({
          ...product,
          currentBid: product.lastBidAmount  // Transform backend's lastBidAmount to currentBid for display
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
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8">Error: {error}</div>;
  }

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
        {products.map((product) => (
          <Product key={product._id} product={product} />  // Render each product
        ))}
      </div>
    </div>
  );
};

export default Products;
