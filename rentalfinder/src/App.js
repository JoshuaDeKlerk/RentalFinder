// rentalfinder/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import useLocalStorage from "use-local-storage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Details from './pages/details';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Bookings from './pages/Bookings';
import PrivateRoute from './PrivateRoute';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Router>
        <NavBar isDark={isDark} setIsDark={setIsDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<PrivateRoute element={Details} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookings" element={<PrivateRoute element={Bookings} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



















