import React from 'react';
import { Button, CardActions, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  // Handle navigation to /bid
  const handleBidClick = () => {
    navigate('/bid'); // Navigate to the bid page
  };

  return (
    <div className="p-5">
      {/* Card component with onClick for navigating to /bid */}
      <Card sx={{ maxWidth: 300 }} onClick={handleBidClick}>
        {/* Card media for displaying the image */}
        <CardMedia
          sx={{ height: 200 }}
          image={product.productImage}  // Dynamically display the image URL
          title="Product Image"
        />

        {/* Card content for displaying product details */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginBottom: '-1px' }}
          >
            {product.productName}  {/* Display product name */}
          </Typography>
          <Typography
            style={{ color: 'black', fontSize: '16px', marginBottom: '5px' }}
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            {product.productDetails}  {/* Display product details */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <span className="font-bold text-green-500">
              Current Bid : Rs. {product.currentBid}  {/* Display current bid */}
            </span>
          </Typography>
        </CardContent>

        {/* Card actions for the "Bid" button */}
        <CardActions>
          <Button
            color="success"
            size="large"
            variant="contained"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation(); // Prevent double navigation if needed
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
