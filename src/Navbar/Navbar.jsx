import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputBase,
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';

// Styled Search Bar
const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  borderRadius: theme.shape.borderRadius,
  padding: '4px 12px',
  width: '100%',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleOptionToggle = () => {
    setSelectedOption(selectedOption === 'Buy' ? 'Sell' : 'Buy');
  };

  return (
    <AppBar
      position="static"
      sx={{ background: 'white', boxShadow: 'none', py: 1 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Side: Logo */}
        <Box
          component="img"
          src="/safanepal.png"
          alt="Logo"
          sx={{ height: 50, borderRadius: 1, ml: 1 }}
        />

        {/* Right Side: Desktop Navbar Components */}
        {!isSmallScreen && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Search Bar */}
            <Search>
              <SearchIcon sx={{ color: 'gray', mr: 1 }} />
              <SearchInput
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Search>

            {/* Buy/Sell Toggle */}
            <Button
              variant="contained"
              onClick={handleOptionToggle}
              sx={{
                borderRadius: '25px',
                bgcolor:
                  selectedOption === 'Buy' ? 'success.main' : 'error.main',
                color: 'white',
                '&:hover': {
                  bgcolor:
                    selectedOption === 'Buy' ? 'success.dark' : 'error.dark',
                },
              }}
            >
              {selectedOption}
            </Button>

            {/* User Icon */}
            <IconButton
              sx={{
                color: 'gray',
                border: '2px solid gray',
                borderRadius: '50%',
              }}
              onClick={handleUserMenuOpen}
            >
              <AccountCircle fontSize="large" />
            </IconButton>

            {/* User Menu */}
            <Menu
              anchorEl={userMenuAnchorEl}
              open={Boolean(userMenuAnchorEl)}
              onClose={handleUserMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleUserMenuClose}>About Me</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        )}

        {/* Right Side: Hamburger Menu for Mobile */}
        {isSmallScreen && (
          <IconButton sx={{ color: 'black' }} onClick={handleMobileMenuToggle}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Right-Side Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <Box sx={{ width: 250, p: 2 }}>
          {/* Search Bar in Mobile Menu */}
          <Search>
            <SearchIcon sx={{ color: 'gray', mr: 1 }} />
            <SearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>

          {/* Buy/Sell Toggle */}
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOptionToggle}>
                <ListItemText
                  primary={`Switch to ${selectedOption === 'Buy' ? 'Sell' : 'Buy'}`}
                />
              </ListItemButton>
            </ListItem>

            {/* User Menu Options */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleUserMenuOpen}>
                <ListItemText primary="About Me" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleUserMenuClose}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
