import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {isLogin ? <Login /> : <Register />}
        <button
          onClick={toggleAuthMode}
          className="w-full text-blue-600 hover:underline"
        >
          {isLogin
            ? "Don't have an account? Register"
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthContainer;
