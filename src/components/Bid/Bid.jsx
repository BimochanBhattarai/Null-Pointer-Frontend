import { Button, TextField } from '@mui/material';
import React from 'react';
import Products from '../Products/products';

const Bid = () => {
  return (
    <>
    <div className='flex p-10 mx-auto w-4/5 mb-10'>
      <div >
        <div className='rounded-xl overflow-hidden mr-10 '>
        <img src="./image.png" alt="Garbage Image" />
        </div>
      </div>
      <div className='w-2/3'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>Plastic</h1>
          <h3 className='text-xl mb-3'>Used bottles and plastic</h3>
        </div>
        <div className='flex justify-between mb-3'>
            <span className='font-bold text-green-500'>
                Highest Bid : Rs. 200
            </span>
            <span className='font-bold text-red-500'>
                Lowest Bid : Rs. 100
            </span>
            <span className='font-bold text-blue-500'>
                Last Bid : Rs. 150
            </span>
        </div>
        <div className='flex gap-10'>
        <TextField id="outlined-basic" label="Enter your bid." variant="outlined" className='w-full'/>
        <Button
            color="success"
            size="large"
            variant="contained"
            className="w-1/3"
          >
            Bid
          </Button>
        </div>
      </div>
    </div>
    <Products />
    </>
  );
};

export default Bid;
