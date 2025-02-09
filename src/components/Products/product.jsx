import { Button, CardActions, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';

const Product = () => {
  return (
    <div className="p-5">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 200 }} image="./image.png" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginBottom: '-1px' }}
          >
            Plastic
          </Typography>
          <Typography
            style={{ color: 'black', fontSize: '16px', marginBottom: '5px' }}
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            Used bottles and plastic
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <span className="font-bold text-green-500">
              Current Bid : Rs. 200
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="success"
            size="large"
            variant="contained"
            className="w-full"
          >
            Bid
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default Product;
