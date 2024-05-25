import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import NavBar from './components/navbar';
import './App.css';
import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Booking from './pages/booking';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
