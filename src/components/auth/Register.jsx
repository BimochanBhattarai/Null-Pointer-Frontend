import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data: ', formData);
  };

  return (
    <div className="lg:mt-24 md:mt-24 md:max-h-[90vh]">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="./safanepal.png"
            alt="SafaNepal Logo"
            className="w-3/4 md:w-2/3 lg:w-1/2 max-w-xs object-contain p-4"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-6 ">
              Register to SafaNepal
            </h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>

              <div className="mb-4">
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

              <div className="mb-4">
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
                className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300 transform hover:scale-105"
              >
                Register
              </button>
            </form>
            <p className="text-center text-gray-600 mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
