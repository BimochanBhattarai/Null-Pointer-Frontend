import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Products from '../Products/products';

const Bid = () => {
  const location = useLocation();
  const product = location.state?.product; // Get product data from route state
  const [maxBidAmount, setMaxBidAmount] = useState(product.maxBidAmount);
  const [minBidAmount, setMinBidAmount] = useState(product.minBidAmount);
  const [lastBidAmount, setLastBidAmount] = useState(product.lastBidAmount);
  const [bidAmount, setBidAmount] = useState(0);

  if (!product) {
    return <div>No product selected. Please go back and select a product.</div>;
  }

  console.log("productId: ", product._id);

  return (
    <>
      <div className="flex flex-col md:flex-row p-10 mx-auto w-full lg:w-4/5 mb-10">
        <div className="flex justify-center mb-6 md:mb-0 md:mr-10">
          <div className="rounded-xl overflow-hidden md:w-80 w-full">
            <img
              src={product.productImage} // Use product image from state
              alt="Garbage Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
              {product.productName} {/* Product name */}
            </h1>
            <h3 className="text-xl mb-3 text-center md:text-left">
              {product.productDetails} {/* Product details */}
            </h3>
          </div>
          <div className="flex justify-between mb-3 text-center">
            <span className="font-bold text-green-500">
              Highest Bid : Rs. {maxBidAmount}
            </span>
            {/* <span className="font-bold text-red-500">
              Lowest Bid : Rs. {minBidAmount}
            </span> */}
            <span className="font-bold text-blue-500">
              Last Bid : Rs. {lastBidAmount}
            </span>
          </div>
          <div className="flex gap-2 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {/* <TextField
              id="outlined-basic"
              label="Enter your bid"
              variant="outlined"
              className="flex-grow"
              value={lastBidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: '8px',
                },
              }}
            /> */}
            <input
              id="outlined-basic"
              label="Enter your bid"
              variant="outlined"
              className="flex-grow p-2 border border-gray-300 rounded-md"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
             <Button
              color="success"
              size="large"
              variant="contained"
              className="w-full md:w-auto"
              onClick={() => {
                setLastBidAmount(bidAmount);
                if (lastBidAmount > maxBidAmount) {
                  setMaxBidAmount(lastBidAmount);
                }
                if (lastBidAmount < minBidAmount) {
                  setMinBidAmount(lastBidAmount);
                }
              }}
              sx={{
                borderRadius: '8px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#4CAF50', // Custom green color
                '&:hover': {
                  backgroundColor: '#45a049', // Darker green on hover
                },
              }}
            >
              Place Bid
            </Button>
          </div>
        </div>
      </div>
        <Products excludeProductId={product._id} />
    </>
  );
};

export default Bid;