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
  const [startPickerOpen, setStartPickerOpen] = useState(false);
  const [endPickerOpen, setEndPickerOpen] = useState(false);
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

  return (
    <div className="details-container">
      {/* Date Picker Modal for Start Date */}
      {startPickerOpen && (
        <div className="datePickerModal" onClick={() => setStartPickerOpen(false)}>
          <div className="datePickerContent" onClick={(e) => e.stopPropagation()}>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setStartPickerOpen(false);
              }}
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
              inline
            />
          </div>
        </div>
      )}

      {/* Date Picker Modal for End Date */}
      {endPickerOpen && (
        <div className="datePickerModal" onClick={() => setEndPickerOpen(false)}>
          <div className="datePickerContent" onClick={(e) => e.stopPropagation()}>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                setEndPickerOpen(false);
              }}
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
              inline
            />
          </div>
        </div>
      )}

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
                  <div className="MiddleTopSliderCont">
                    <div className="car-logo">
                      <img src={product.logo} alt={product.name} className="carLogoImage" />
                    </div>
                    <div className="details-text">
                      <h1>{product.name}</h1>
                      <p>{product.year}</p>
                    </div> 
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

      <div className="carBoxSeperator">
        <h2 className="car-section">Car Details</h2>
      </div>
      
      <div className="specificationsAndReviews">
        
        <div className="specificationsBox">
          <h3>Specifications</h3>
          <div className="specificationsDetailsBox">
            <div className="specificationsTextTop">
              <div className='specificationsTextItem'><img src={fuel} alt="Fuel" /> {product.fuel}</div>
              <div className='specificationsTextItem'><img src={seat} alt="Seats" /> {product.seats}</div>
              <div className='specificationsTextItem'><img src={speed} alt="Top Speed" /> {product.topSpeed}</div>
            </div>
            <div className="specificationsTextBottom">
              <div className='specificationsTextItem'><img src={engine} alt="Engine" /> {product.engine}</div>
              <div className='specificationsTextItem'><img src={manual} alt="Transmission" /> {product.transmission}</div>
              <div className='specificationsTextItem'><img src={aircon} alt="Air Conditioning" /> {product.airConditioning}</div>
            </div>
          </div>
        </div>

        <div className="reviewsBox">
          <h3>Reviews</h3>
          <div className="reviewsBoxCont">
            <div className="reviewsList">
              {reviews.map(review => (
                <div key={review._id} className="review">
                  <div className="reviewLeft">
                    <h1>{review.userId.username}:</h1>
                    <p>{review.text}</p>
                  </div>
                  <div className="reviewRight">
                    <p className='reviewRating'>{review.rating} 
                      <div className="starRatingRight">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.2444 1.35062C12.5717 0.580729 12.7354 0.195785 12.9633 0.0772437C13.1612 -0.0257479 13.3936 -0.0257479 13.5915 0.0772437C13.8193 0.195785 13.983 0.580729 14.3103 1.35062L16.917 7.48288C17.0138 7.71047 17.0622 7.82427 17.1371 7.91141C17.2033 7.98852 17.2843 8.0502 17.3746 8.09242C17.4768 8.14015 17.595 8.15323 17.8313 8.17937L24.1987 8.88408C24.9981 8.97255 25.3977 9.01678 25.5757 9.20739C25.7302 9.37295 25.802 9.60479 25.7698 9.83401C25.7327 10.0979 25.4342 10.38 24.8371 10.9443L20.0807 15.439C19.9043 15.6057 19.8159 15.6892 19.7601 15.7907C19.7106 15.8807 19.6796 15.9805 19.6693 16.0836C19.6576 16.2003 19.6822 16.3221 19.7315 16.566L21.06 23.1337C21.2268 23.9583 21.3102 24.3705 21.1923 24.6068C21.0899 24.8123 20.9018 24.9555 20.684 24.9942C20.4332 25.0386 20.0851 24.8281 19.3887 24.407L13.8424 21.0525C13.6366 20.928 13.5336 20.8659 13.4242 20.8414C13.3274 20.8199 13.2273 20.8199 13.1305 20.8414C13.0211 20.8659 12.9182 20.928 12.7123 21.0525L7.16604 24.407C6.46972 24.8281 6.12156 25.0386 5.87077 24.9942C5.65292 24.9555 5.46485 24.8123 5.36244 24.6068C5.24456 24.3705 5.32795 23.9583 5.49475 23.1337L6.82321 16.566C6.87251 16.3221 6.89717 16.2003 6.88546 16.0836C6.8751 15.9805 6.84418 15.8807 6.79471 15.7907C6.7388 15.6892 6.65053 15.6057 6.47401 15.439L1.71773 10.9443C1.1206 10.38 0.822034 10.0979 0.784912 9.83401C0.752682 9.60479 0.824508 9.37295 0.979073 9.20739C1.15702 9.01678 1.55672 8.97255 2.35612 8.88408L8.72346 8.17937C8.95979 8.15323 9.07794 8.14015 9.18012 8.09242C9.27052 8.0502 9.35146 7.98852 9.4177 7.91141C9.49255 7.82427 9.54093 7.71047 9.63769 7.48288L12.2444 1.35062Z"/>
                        </svg>

                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {user && (
              <div className="reviewForm">
              <h4>Leave a Review</h4>
              <div className="ReviewAndRating">
                <textarea
                  className="reviewTextarea"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review here"
                />
                <div className="RatingSelector">
                  <p>Star Rating</p>
                  <select
                    className="reviewSelect"
                    value={reviewRating}
                    onChange={(e) => setReviewRating(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(rating => (
                      <option key={rating} value={rating}>{rating} Stars</option>
                    ))}
                  </select>
                </div>   
              </div>
              <button className="reviewButton" onClick={handleReviewSubmit}>Submit Review</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="carBoxSeperator">
        <h2 className="car-section">Booking</h2>
      </div>

      <div className="bookingSection">

        <div className="DatesContainer">
          <h2>Select dates</h2>
          <div className="datePicker">
            <div className="datePickerField">
              <h3>Start Date</h3>
              <p>Select the date you want to start renting the car</p>
              <button onClick={() => setStartPickerOpen(!startPickerOpen)}>Start Date</button>
            </div>
            <div className="datePickerField">
              <h3>End Date</h3>
              <p>Select the date you want to stop renting the car</p>
              <button onClick={() => setEndPickerOpen(!endPickerOpen)}>End Date</button>
            </div>
          </div>
        </div>

        <div className="QuoteContainer">
          <h2>Quote</h2>
          <div className="ThenToWhereCont">
            <input
              type="text"
              value={startDate ? startDate.toDateString() : ''}
              readOnly
              placeholder='Start Date'
            />
            <p>To</p>
            <input
              type="text"
              value={endDate ? endDate.toDateString() : ''}
              readOnly
              placeholder='End Date'
            />
          </div>
          <div className="price">
            <p>Total Price:</p>
            <p>${totalPrice}</p>
          </div>
          <div className="ButtonQuoteCont"> 
            <button onClick={handleBooking}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
