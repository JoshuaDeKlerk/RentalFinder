// rentalfinder/src/components/ProductCard.js
import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { GiGearStickPattern } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import '../css/productCard.css';

const ProductCard = ({ product, onFavoriteToggle }) => {
  const { user, updateUserFavorites } = useContext(AuthContext);
  const navigate = useNavigate();

  const isFavorite = user?.favorites?.includes(product._id);

  const toggleFavorite = async () => {
    if (!user) {
      alert('Please sign in to add favorites');
      return;
    }

    try {
      if (isFavorite) {
        await axios.post('http://localhost:5000/favorites/remove', { userId: user._id, productId: product._id });
        updateUserFavorites(user.favorites.filter(fav => fav !== product._id));
        onFavoriteToggle && onFavoriteToggle(product._id);
      } else {
        await axios.post('http://localhost:5000/favorites/add', { userId: user._id, productId: product._id });
        updateUserFavorites([...user.favorites, product._id]);
        onFavoriteToggle && onFavoriteToggle(product._id);
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
      alert('Error updating favorites');
    }
  };

  const handleDetailsClick = () => {
    navigate(`/details/${product._id}`);
  };

  return (
    <div className="productCard">
      <div className="cardTop" style={{ backgroundImage: `url(${product.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="reviewStars">
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="favoriteIcon" onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}>
          {isFavorite ? <AiFillHeart className="heartIcon favorite" /> : <AiOutlineHeart className="heartIcon" />}
        </div>
      </div>
      <div className="cardBottom" onClick={handleDetailsClick}>
        <div className="productCardInfo">
          <h2>{product.name}</h2>
          <p>{product.year}</p>
          <div className="cardBottomBoxInfo">
            <div className="locationInfo CardItemInfo">
              <FiMapPin />
              <p>{product.location}</p>
            </div>
            <div className="gearboxInfo CardItemInfo">
              <GiGearStickPattern />
              <p>{product.transmission}</p>
            </div>
            <div className="priceInfo CardItemInfo">
              <h4>{product.price}</h4>
              <p>/day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;














































