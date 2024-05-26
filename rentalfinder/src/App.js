import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Booking from './pages/booking';
import SignIn from './pages/signin'; // Correct import
import SignUp from './pages/signup'; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signin" element={<SignIn />} /> {/* Correct path */}
        <Route path="/signup" element={<SignUp />} /> {/* Correct path */}
      </Routes>
    </Router>
  );
}

export default App;


