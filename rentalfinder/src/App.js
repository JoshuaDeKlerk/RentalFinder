import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Booking from './pages/booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} /> {/* Corrected path */}
        <Route path="/booking" element={<Booking />} /> {/* Corrected path */}
      </Routes>
    </Router>
  );
}

export default App;
