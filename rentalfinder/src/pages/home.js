import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        setBrands([...new Set(response.data.map(product => product.brand))]);
        setLocations([...new Set(response.data.map(product => product.location))]);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const filteredProducts = products.filter(product => {
    return (
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (selectedLocation ? product.location === selectedLocation : true) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
    );
  });

  return (
    <div className="home">
      <div className="banner">
        <h1>Rental Finder</h1>
        <p>Best Luxury Car Rental Site</p>
      </div>
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter-controls">
          <div className="filter-brands">
            {brands.map((brand, index) => (
              <button key={index} onClick={() => handleBrandChange(brand)}>
                {brand}
              </button>
            ))}
          </div>
          <div className="filter-location">
            <label>Location: </label>
            <select onChange={handleLocationChange} value={selectedLocation}>
              <option value="">All Locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="filter-price">
            <label>Price Range: </label>
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="Min Price"
            />
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              placeholder="Max Price"
            />
          </div>
        </div>
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <footer className="about">
        <h2>About</h2>
        <p>Newsletter</p>
      </footer>
    </div>
  );
};

export default Home;































