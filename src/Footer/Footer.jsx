import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Container,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              SafaNepal
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Turning Waste into Wealth, for a Greener Future.
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Email: support@safanepal.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Phone: +977 9812345678
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Follow Us
            </Typography>
            <Box>
              {[
                { icon: <FacebookIcon />, link: '#' },
                { icon: <TwitterIcon />, link: '#' },
                { icon: <InstagramIcon />, link: '#' },
                { icon: <LinkedInIcon />, link: '#' },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  href={item.link}
                  sx={{
                    color: '#555',
                    mx: 0.5, // Space between icons
                    '&:hover': { color: '#28a745' },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider for Clean Separation */}
        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: '#777', mt: 1 }}
        >
          © {new Date().getFullYear()} SafaNepal. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
