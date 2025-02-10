import React from 'react';
import { Button, CardActions, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  const navigate = useNavigate();

  // Handle navigation to /bid with product data
  const handleBidClick = () => {
    navigate('/bid', { state: { product } }); // Pass product data via route state
  };

  return (
    <div className="p-4">
      {/* Card component with hover effect and onClick for navigating to /bid */}
      <Card
        sx={{
          maxWidth: 300,
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          },
        }}
        onClick={handleBidClick}
      >
        {/* Card media for displaying the image */}
        <CardMedia
          sx={{ height: 200, objectFit: 'cover' }}
          image={product.productImage || 'https://via.placeholder.com/300'} // Fallback image if no productImage
          title="Product Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
          >
            {product.productName} {/* Display product name */}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 2, fontSize: '14px' }}
          >
            {product.productDetails} {/* Display product details */}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'success.main', fontWeight: 'bold', fontSize: '16px' }}
          >
            Current Bid: Rs. {product.currentBid} {/* Display current bid */}
          </Typography>
        </CardContent>

        {/* Card actions for the "Bid" button */}
        <CardActions sx={{ p: 2 }}>
          <Button
            color="success"
            size="large"
            variant="contained"
            fullWidth
            onClick={(e) => {
              e.stopPropagation(); // Prevent double navigation
              scrollToTop();
              handleBidClick();
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
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;