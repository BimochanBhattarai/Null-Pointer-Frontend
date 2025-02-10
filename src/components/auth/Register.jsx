import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      toast.success('Registration Successful! 🎉'); // Success toast

      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: '',
      });

      setTimeout(() => {
        navigate('/'); // Redirect to home after success
      }, 2000);
    } catch (error) {
      toast.error('Registration failed. Try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-[10px] mb-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <img
            src="/safanepal.png"
            alt="SafaNepal Logo"
            className="w-3/4 md:w-2/3 lg:w-1/2 max-w-xs object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
              Register to सफा<span style={{ color: '#346705' }}>Nepal</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['fullName', 'phoneNumber', 'email', 'username', 'password'].map((field, index) => (
                <div key={index}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field === 'fullName' ? 'Full Name' : field === 'phoneNumber' ? 'Phone Number' : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Register'
                )}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
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
