import { Button, TextField } from '@mui/material';
import React from 'react';
import Products from '../Products/products';

const Bid = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-10 mx-auto w-full lg:w-4/5 mb-10">
        <div className="flex justify-center mb-6 md:mb-0 md:mr-10">
          <div className="rounded-xl overflow-hidden md:w-80 w-full">
            <img
              src="./image.png"
              alt="Garbage Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
              Plastic
            </h1>
            <h3 className="text-xl mb-3 text-center md:text-left">
              Used bottles and plastic
            </h3>
          </div>
          <div className="flex justify-between mb-3 text-center">
            <span className="font-bold text-green-500">
              Highest Bid : Rs. 200
            </span>
            <span className="font-bold text-red-500">Lowest Bid : Rs. 100</span>
            <span className="font-bold text-blue-500">Last Bid : Rs. 150</span>
          </div>
          <div className="flex gap-2 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <TextField
              id="outlined-basic"
              label="Enter your bid"
              variant="outlined"
              className="flex-grow"
              InputProps={{
                style: {
                  borderRadius: '8px',
                },
              }}
            />
             <Button
              color="success"
              size="large"
              variant="contained"
              className="w-full md:w-auto"
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
      <div className="container w-4/5 mx-auto md:w-full">
        <Products />
      </div>
    </>
  );
};

export default Bid;
