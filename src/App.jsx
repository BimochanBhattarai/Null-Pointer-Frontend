import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
      <ToastContainer position="top-right" autoClose={2000} />
        <div className='px-2 md:px-10'>
        <MyRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
