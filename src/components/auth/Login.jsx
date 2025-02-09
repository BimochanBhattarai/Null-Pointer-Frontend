import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center max-h-[90vh]">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <img
          src="./safanepal.png"
          alt="SafaNepal Logo"
          className="w-3/4 md:w-2/3 lg:w-1/2 max-w-xs object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8 mx-4">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            Login to SafaNepal
          </h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link to="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
