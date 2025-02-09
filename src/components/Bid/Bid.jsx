import { Button, TextField } from '@mui/material';
import React from 'react';

const Bid = () => {
  return (
    <div>
      <div>
        <img src="./image.png" alt="Garbage Image" />
      </div>
      <div>
        <div>
          <h1>Plastic</h1>
          <h3>Used bottles and plastic</h3>
        </div>
        <div>
            <span>
                Highest Bid : Rs. 200
            </span>
            <span>
                Lowest Bid : Rs. 100
            </span>
            <span>
                Last Bid : Rs. 150
            </span>
        </div>
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button
            color="success"
            size="large"
            variant="contained"
            className="w-full"
          >
            Bid
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
