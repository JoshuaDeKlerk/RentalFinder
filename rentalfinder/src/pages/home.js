import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/home.css';
import Logo from "../assets/logo/LogoBlue.svg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const containerRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        const uniqueBrands = [...new Map(response.data.map(item => [item.brand, item])).values()];
        setBrands(uniqueBrands);
        setLocations([...new Set(response.data.map(product => product.location))]);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (containerRef.current && containerRef.current.contains(event.target)) {
        event.preventDefault();
        containerRef.current.scrollLeft += event.deltaY;
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('wheel', handleScroll);
      }
    };
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

  const handleClearFilters = () => {
    setSelectedBrand('');
    setSelectedLocation('');
    setPriceRange({ min: 0, max: 100000 });
  };

  return (
    <div className="home">
      <div className="heroImage">
        <div className="logoHeroImage">
          <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </div>
        <h1>Rental Finder</h1>
        <p>Best Luxury Car Rental Site</p>
      </div>

      <div className="FilterBoxSeperator">
        <h2 className="FilterSection">Filter</h2>
      </div>

      <div className="filtersContainer">
        <div className="filterControls">
          <div className="FilterBrands">
            <div className="FilterTitle"><h2>Filter by brands</h2></div>
            <div className="FilterBrandItems" ref={containerRef}>
              {brands.map((brand, index) => (
                <button key={index} onClick={() => handleBrandChange(brand.brand)}>
                  <img src={brand.logo} alt={brand.brand} className="brandLogo" style={{ width: '100%', height: '100%' }} />
                </button>
              ))}
            </div>
          </div>
          <div className="filter-location">
            <h1>Location </h1>
            <select onChange={handleLocationChange} value={selectedLocation}>
              <option value="">All Locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="filter-price">
              <h1>Price Range </h1>
              <div className="filterPriceRange">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder="Min Price"
              />
              <p>TO</p>
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder="Max Price"
              />
            </div>
          </div>
          <div className="filter-clear">
            <button onClick={handleClearFilters}>Clear Filters</button>
          </div>
        </div>
      </div>

      <div className="FilterBoxSeperator">
        <h2 className="FilterSection">Our Cars</h2>
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>&copy; 2024 RentalFinder. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
