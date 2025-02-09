import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 w-full ">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6rounded-lg shadow-lg">
        {isLogin ? <Login /> : <Register />}
        <div className="text-center mt-4">
          <button
            onClick={toggleAuthMode}
            className="text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Register"
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
