import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Menu,
    MenuItem,
    Button,
    Box,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';

// Styled Search Component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px', // More rounded corners
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: `1px solid ${theme.palette.grey[500]}`,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState('Buy');
    const [isAboutMeExpanded, setIsAboutMeExpanded] = React.useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const open = Boolean(anchorEl);
    const isUserMenuOpen = Boolean(userMenuAnchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleClose();
    };

    const handleUserMenuOpen = (event) => {
        setUserMenuAnchorEl(event.currentTarget);
        setIsAboutMeExpanded(false);
    };

    const handleUserMenuClose = () => {
        setUserMenuAnchorEl(null);
    };

    const toggleAboutMe = () => {
        setIsAboutMeExpanded((prev) => !prev);
    };

    // Mock user data
    const userDetails = {
        name: 'John Doe',
        phoneNumber: '+977 9812345678',
        email: 'johndoe@example.com',
        username: 'johndoe123',
        rewardPoints: 1500,
    };

    return (
        
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', py: 1, mx: 2 }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {/* Logo */}
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <img
                        src="/safanepal.png"
                        alt="Logo"
                        style={{ width: 'auto', height: '50px', borderRadius: '10px' }} // Rounded logo
                    />
                </Typography>

                {/* Search */}
                <Search sx={{ flexGrow: isSmallScreen ? 1 : 0 }}>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: 'gray' }} /> {/* White icon */}
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ color: 'gray' }} // White text
                    />
                </Search>

                {/* Buy/Sell Dropdown */}
                {!isSmallScreen && (
                    <div>
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            sx={{
                                marginLeft: 2,
                                borderRadius: '25px', // Rounded button
                                backgroundColor:
                                    selectedOption === 'Buy'
                                        ? '#4caf50'
                                        : selectedOption === 'Sell'
                                            ? '#f44336'
                                            : '#1976d2',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor:
                                        selectedOption === 'Buy'
                                            ? '#388e3c'
                                            : selectedOption === 'Sell'
                                                ? '#d32f2f'
                                                : '#1565c0',
                                },
                            }}
                        >
                            {selectedOption}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem
                                onClick={() => handleOptionClick('Buy')}
                                sx={{ backgroundColor: selectedOption === 'Buy' ? '#e8f5e9' : 'inherit' }}
                            >
                                Buy
                            </MenuItem>
                            <MenuItem
                                onClick={() => handleOptionClick('Sell')}
                                sx={{ backgroundColor: selectedOption === 'Sell' ? '#ffebee' : 'inherit' }}
                            >
                                Sell
                            </MenuItem>
                        </Menu>
                    </div>
                )}

                {/* User Avatar */}
                <IconButton
                    sx={{
                        marginLeft: 2,
                        color: 'gray',
                        border: '2px solid gray', // Circular border
                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: alpha(theme.palette.common.white, 0.1), // Hover effect
                        },
                    }}
                    onClick={handleUserMenuOpen}
                >
                    <AccountCircle fontSize="large" />
                </IconButton>

                {/* User Menu */}
                <Menu
                    anchorEl={userMenuAnchorEl}
                    open={isUserMenuOpen}
                    onClose={handleUserMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {/* About Me Option */}
                    <MenuItem onClick={toggleAboutMe}>
                        {isAboutMeExpanded ? 'Hide Details' : 'About Me'}
                    </MenuItem>

                    {/* Show Details if About Me is Expanded */}
                    {isAboutMeExpanded && (
                        <Box sx={{ px: 2, py: 1 }}>
                            <Typography variant="body2">Name: {userDetails.name}</Typography>
                            <Typography variant="body2">Phone: {userDetails.phoneNumber}</Typography>
                            <Typography variant="body2">Email: {userDetails.email}</Typography>
                            <Typography variant="body2">Username: {userDetails.username}</Typography>
                            <Typography variant="body2" color="primary">
                                Reward Points: {userDetails.rewardPoints}
                            </Typography>
                        </Box>
                    )}

                    {/* Logout Option */}
                    <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;