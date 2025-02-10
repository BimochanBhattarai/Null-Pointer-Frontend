import React from 'react';
import { Button, CardActions, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  // Handle navigation to /bid with product data
  const handleBidClick = () => {
    navigate('/bid', { state: { product } }); // Pass product data via route state
  };

  return (
    <div className="p-5">
      <Card sx={{ maxWidth: 300 }} onClick={handleBidClick}>
        <CardMedia
          sx={{ height: 200 }}
          image={product.productImage}
          title="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.productDetails}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className="font-bold text-green-500">
              Current Bid : Rs. {product.currentBid}
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="success"
            size="large"
            variant="contained"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              handleBidClick();
            }}
          >
            Bid
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;