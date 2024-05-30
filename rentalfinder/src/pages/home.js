import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './signup'; // Correct import path for SignUp component
import Booking from './booking';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/signup">
        <button>Go to Sign Up</button>
      </Link>
      
    </div>
  );
}

export default Home;


