import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContext';
import '../css/details.css';

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchUnavailableDates = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bookings/unavailable-dates/${id}`);
        setUnavailableDates(response.data);
      } catch (error) {
        console.error('Error fetching unavailable dates:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reviews/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchProduct();
    fetchUnavailableDates();
    fetchReviews();
  }, [id]);

  const calculateTotalPrice = (start, end, pricePerDay) => {
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * pricePerDay;
  };

  useEffect(() => {
    if (startDate && endDate && product) {
      setTotalPrice(calculateTotalPrice(startDate, endDate, product.price));
    }
  }, [startDate, endDate, product]);

  const isDateUnavailable = (date) => {
    return unavailableDates.some(({ startDate, endDate }) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return date >= start && date <= end;
    });
  };

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    if (isDateUnavailable(startDate) || isDateUnavailable(endDate)) {
      alert('The selected dates are not available');
      return;
    }

    if (!user) {
      alert('You need to be logged in to make a booking');
      navigate('/signin');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/bookings', {
        carId: product._id,
        userId: user._id,
        startDate,
        endDate,
        totalPrice,
        checkoutDetails: {
          cardNumber: '1234-5678-9101-1121',
          expiryDate: '12/23',
          cvv: '123'
        }
      });
      alert(response.data.message);
      navigate('/bookings'); // Navigate to the bookings page
    } catch (error) {
      console.error('Error making booking:', error);
      alert(error.response?.data.message || 'Error making booking');
    }
  };

  const handleReviewSubmit = async () => {
    if (!reviewText || !reviewRating) {
      alert('Please provide a rating and a review text');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/reviews', {
        productId: id,
        userId: user._id,
        rating: reviewRating,
        text: reviewText,
      });
      setReviews([...reviews, response.data]);
      setReviewText('');
      setReviewRating(5);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert(error.response?.data.message || 'Error submitting review');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <div className="header">
        <button className="icon-left" onClick={() => navigate(-1)}>Back</button>
        <div className="details-text">
          <h1>{product.name}</h1>
          <p>{product.year}</p>
        </div>
        <div className="car-logo">
          <img src={product.images[0]} alt={product.name} className="car" />
        </div>
        <button className="icon-right">Favorite</button>
      </div>
      <div className="car-box">
        <h2 className="car-details-text">Car Details</h2>
      </div>
      <div className="booking">
        <h3>Price: {product.price} per day</h3>
        <div>
          <label>Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            filterDate={date => !isDateUnavailable(date)}
            className="date-picker"
          />
        </div>
        <div>
          <label>End Date</label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            filterDate={date => !isDateUnavailable(date)}
            className="date-picker"
          />
        </div>
        <div className="total-price">Total Price: {totalPrice}</div>
        <button className="book-btn" onClick={handleBooking}>Book Car</button>
      </div>
      <div className="specifications-box">
        <h3>Specifications</h3>
        <div className="specifications-details-box">
          <div className="specifications-text">
            <p>Fuel: {product.fuel}</p>
            <p>Seats: {product.seats}</p>
            <p>Top Speed: {product.topSpeed}</p>
            <p>Engine: {product.engine}</p>
            <p>Transmission: {product.transmission}</p>
            <p>Air Conditioning: {product.airConditioning}</p>
          </div>
        </div>
      </div>
      <div className="reviews-box">
        <h3>Reviews</h3>
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review._id} className="review">
              <p><strong>{review.userId.username}</strong></p>
              <p>Rating: {review.rating}</p>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
        <div className="review-form">
          <h4>Write Your Own Review Here!</h4>
          <label>Rating:</label>
          <select value={reviewRating} onChange={e => setReviewRating(e.target.value)}>
            <option value={5}>Excellent</option>
            <option value={4}>Good</option>
            <option value={3}>Average</option>
            <option value={2}>Poor</option>
            <option value={1}>Terrible</option>
          </select>
          <label>Review:</label>
          <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} />
          <button className="submit-review-btn" onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
      <footer className="about">
        <h2>About</h2>
        <p>Newsletter</p>
      </footer>
    </div>
  );
};

export default Details;









































