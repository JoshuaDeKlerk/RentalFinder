import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import CheckoutModal from '../components/CheckoutModals';
import '../css/bookings.css';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bookings/user/${user._id}`);
        setBookings(response.data.bookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [bookings]);

  const handleRemoveBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/bookings/${bookingId}`);
      setBookings(bookings.filter(booking => booking._id !== bookingId));
    } catch (error) {
      console.error('Error removing booking:', error);
    }
  };

  const handleCheckout = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const closeCheckout = () => {
    setSelectedBooking(null);
    setShowModal(false);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const cardNumber = e.target.cardNumber.value;
    const expiryDate = e.target.expiryDate.value;
    const cvv = e.target.cvv.value;

    if (!cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all payment details');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/bookings', {
        ...selectedBooking,
        checkoutDetails: { cardNumber, expiryDate, cvv }
      });
      alert(response.data.message);
      closeCheckout();
      setBookings(bookings.filter(booking => booking._id !== selectedBooking._id));
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error during checkout');
    }
  };

  if (!user) {
    return <div>Please log in to view your bookings.</div>;
  }

  return (
    <div className="bookings">
      <h2>Your Bookings</h2>
      <div className="total-price">Total Price: {totalPrice}</div>
      {bookings.length === 0 ? (
        <div className="empty-bookings">You have no bookings.</div>
      ) : (
        <div className="bookings-container">
          {bookings.map(booking => (
            <div key={booking._id} className="booking-card">
              <img src={booking.car.images[0]} alt={booking.car.name} />
              <div className="booking-info">
                <h3>{booking.car.name}</h3>
                <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
                <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
                <p>Total Price: {booking.totalPrice}</p>
                <button onClick={() => handleRemoveBooking(booking._id)}>Remove Booking</button>
                <button className="checkout-button" onClick={() => handleCheckout(booking)}>Checkout</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <CheckoutModal
        show={showModal}
        handleClose={closeCheckout}
        handlePayment={handlePayment}
        bookingData={{ carName: selectedBooking?.car.name, totalPrice: selectedBooking?.totalPrice }}
      />
    </div>
  );
};

export default Bookings;








