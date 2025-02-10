import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './MyRoutes';

function App() {
  return (
    <>
      <Router>
        <div className='px-2 md:px-10'>
        <MyRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
