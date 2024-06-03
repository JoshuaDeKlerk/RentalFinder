import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../css/favorites.css';

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const responses = await Promise.all(
          user.favorites.map(productId => axios.get(`http://localhost:5000/products/${productId}`))
        );
        setFavoriteProducts(responses.map(res => res.data));
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };

    if (user && user.favorites.length > 0) {
      fetchFavorites();
    }
  }, [user]);

  const handleFavoriteToggle = (productId) => {
    setFavoriteProducts(favoriteProducts.filter(product => product._id !== productId));
  };

  if (!user) {
    return <div>Please log in to view your favorites.</div>;
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favoriteProducts.length === 0 ? (
        <div className="empty-favorites">You have no favorite cars.</div>
      ) : (
        <div className="favorites-container">
          {favoriteProducts.map(product => (
            <ProductCard key={product._id} product={product} onFavoriteToggle={handleFavoriteToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
