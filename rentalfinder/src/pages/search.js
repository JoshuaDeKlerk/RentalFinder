//rentalfinder/src/pages/search.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/search.css'; // Adjusted to point to search.css

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedBrand, selectedLocation, priceRange]);

  const filterProducts = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrand !== 'All') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    if (selectedLocation !== 'All') {
      filtered = filtered.filter(product => product.location === selectedLocation);
    }

    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    setFilteredProducts(filtered);
  };

  return (
    <>
    <div className="search-page">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)} className="filter-select">
          <option value="All">All Brands</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Tesla">Tesla</option>
          {/* Add more options as needed */}
        </select>
        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="filter-select">
          <option value="All">All Locations</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Johannesburg">Johannesburg</option>
          {/* Add more options as needed */}
        </select>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="30000"
            step="100"
            value={priceRange[0]}
            onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <input
            type="range"
            min="0"
            max="30000"
            step="100"
            value={priceRange[1]}
            onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
          <div>
            {priceRange[0]} - {priceRange[1]}
          </div>
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    <footer className="footer">
    <div className="footer-content">
      <div>&copy; 2024 RentalFinder. All rights reserved.</div>
    </div>
  </footer>
  </>
  );
};

export default Search;

