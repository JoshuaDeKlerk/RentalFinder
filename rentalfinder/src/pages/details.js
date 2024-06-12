import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContext';
import '../css/details.css';
import fuel from '../assets/images/fuel.svg';
import speed from '../assets/images/speed.svg';
import seat from '../assets/images/seat.svg';
import engine from '../assets/images/engine.svg';
import manual from '../assets/images/manual.svg';
import aircon from '../assets/images/aircon.svg';
import heart from '../assets/icons/heart.svg';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }



  // <div className="carDetailsTopSlider">
  //         <div className="SideTopSlider">
  //          {/* <button className="icon-left" onClick={() => navigate(-1)}>Back</button> */}
  //         </div>
  //         <div className="MiddleTopSlider">
  //           <div className="car-logo">
  //             <img src={product.logo} alt={product.name} className="car" />
  //           </div>
  //           <div className="details-text">
  //             <h1>{product.name}</h1>
  //             <p>{product.year}</p>
  //           </div>
  //         </div>
  //         <div className="SideTopSlider rightSideTop">
  //           <img src={heart} alt="Favorite" className="icon" />
  //         </div>
  //   </div>
  return (
    <div className="details-container">
      <div className="header">
        <div className="carDetailsCarousel">
          <div className="custom-carousel">
            <button className="carousel-control left" onClick={handlePrevImage}>
              &#10094;
            </button>

            
            <div
              className="carousel-inner"
              style={{ backgroundImage: `url(${product.images[currentImageIndex]})`}}
            >
              <div className="carDetailsTopSlider">
                <div className="SideTopSlider rightSideTop">
                </div>
                <div className="MiddleTopSlider">
                <div className="car-logo">
                <img src={product.logo} alt={product.name} className="car" />
                </div>
                <div className="details-text">
                  <h1>{product.name}</h1>
                  <p>{product.year}</p>
                </div>
                </div>
                <div className="SideTopSlider rightSideTop">
                  <img src={heart} alt="Favorite" className="icon" />
                </div>
              </div>
            </div>


            <button className="carousel-control right" onClick={handleNextImage}>
              &#10095;
            </button>
          </div>
        </div>
      </div>

      <div className="car-box">
        <h2 className="car-section">Car Details</h2>
      </div>
      
      <div className="specifications-box">
        <h3>Specifications</h3>
        <div className="specifications-details-box">
          <div className="specifications-text">
          <p><img src={fuel} alt="Fuel" /> {product.fuel}</p>
            <p><img src={seat} alt="Seats" /> {product.seats}</p>
            <p><img src={speed} alt="Top Speed" /> {product.topSpeed}</p>
            <p><img src={engine} alt="Engine" /> {product.engine}</p>
            <p><img src={manual} alt="Transmission" /> {product.transmission}</p>
            <p><img src={aircon} alt="Air Conditioning" /> {product.airConditioning}</p>
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
        {user && (
          <div className="review-form">
            <h4>Leave a Review</h4>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
            />
            <select
              value={reviewRating}
              onChange={(e) => setReviewRating(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(rating => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </select>
            <button onClick={handleReviewSubmit}>Submit Review</button>
          </div>
        )}
      </div>
      <div className="booking-section">
        <h2>Booking</h2>
        <div className="date-picker">
          <div>
            <label>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              excludeDates={unavailableDates.map(({ startDate, endDate }) => {
                const start = new Date(startDate);
                const end = new Date(endDate);
                let dateArray = [];
                let currentDate = start;
                while (currentDate <= end) {
                  dateArray.push(new Date(currentDate));
                  currentDate.setDate(currentDate.getDate() + 1);
                }
                return dateArray;
              }).flat()}
            />
          </div>
          <div>
            <label>End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              excludeDates={unavailableDates.map(({ startDate, endDate }) => {
                const start = new Date(startDate);
                const end = new Date(endDate);
                let dateArray = [];
                let currentDate = start;
                while (currentDate <= end) {
                  dateArray.push(new Date(currentDate));
                  currentDate.setDate(currentDate.getDate() + 1);
                }
                return dateArray;
              }).flat()}
            />
          </div>
        </div>
        <div className="price">
          <p>Total Price: ${totalPrice}</p>
        </div>
        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default Details;
