import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [isAboutMeExpanded, setIsAboutMeExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);

  const userDetails = {
    name: "John Doe",
    phoneNumber: "+977 9812345678",
    email: "johndoe@example.com",
    username: "johndoe123",
    rewardPoints: 1500,
  };

  const staticData = [
    'Avengers: Endgame',
    'The Dark Knight',
    'Inception',
    'Interstellar',
    'Titanic',
    'The Shawshank Redemption',
    'Forrest Gump',
    'The Godfather',
    'The Matrix',
    'The Lion King',
  ];

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setShowLoginButton(false);
  };

  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex flex-shrink-0 items-center justify-between">
        {/* Left Side: Logo/Image Icon */}
        <div>
          <img
            src="/safanepal.png"
            alt="Logo"
            className="h-12 w-auto rounded-lg"
          />
        </div>

        {/* Right Side: Search Bar, Buy/Sell Toggle, Login */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaSearch size={18} />
            </div>
            <Autocomplete
              disablePortal
              options={staticData}
              sx={{
                width: '300px',
                '& .MuiInputBase-root': {
                  height: '40px',
                  borderRadius: '20px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  paddingLeft: '36px',
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#e5e7eb',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search..."
                  variant="outlined"
                  fullWidth
                  className="bg-transparent border-none focus:outline-none"
                />
              )}
            />
          </div>

          {/* Buy/Sell Toggle */}
          <div className="relative">
            <button
              className={`px-5 py-2 rounded-full text-white font-medium transition duration-300 ${
                selectedOption === "Buy"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {selectedOption}
            </button>
            {menuOpen && (
              <div className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    selectedOption === "Buy" ? "bg-green-100" : ""
                  }`}
                  onClick={() => {
                    setSelectedOption("Buy");
                    setMenuOpen(false);
                  }}
                >
                  Buy
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    selectedOption === "Sell" ? "bg-red-100" : ""
                  }`}
                  onClick={() => {
                    setSelectedOption("Sell");
                    setMenuOpen(false);
                  }}
                >
                  Sell
                </button>
              </div>
            )}
          </div>

          {/* Login Button */}
          {showLoginButton && !isLoggedIn ? (
            <Link
              to="/login"
              className="px-5 py-2 border border-green-600 text-green-600 font-bold rounded-full hover:bg-green-100 transition duration-300"
              onClick={() => setShowLoginButton(false)}
            >
              Login
            </Link>
          ) : null}

          {/* User Icon (if logged in) */}
          {isLoggedIn && (
            <div className="relative">
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition duration-300"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <FaUserCircle size={24} />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAboutMeExpanded(!isAboutMeExpanded)}
                  >
                    {isAboutMeExpanded ? "Hide Details" : "About Me"}
                  </button>
                  {isAboutMeExpanded && (
                    <div className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                      <p>Name: {userDetails.name}</p>
                      <p>Phone: {userDetails.phoneNumber}</p>
                      <p>Email: {userDetails.email}</p>
                      <p>Username: {userDetails.username}</p>
                      <p className="text-blue-600 font-bold">
                        Reward Points: {userDetails.rewardPoints}
                      </p>
                    </div>
                  )}
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setUserMenuOpen(false);
                      setShowLoginButton(true);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
