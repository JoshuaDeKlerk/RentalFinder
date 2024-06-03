// src/components/BookingForm.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ carId, price }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calculateTotalPrice = (startDate, endDate, price) => {
    if (!startDate || !endDate) return 0;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays * price;
  };

  const handleBooking = async (event) => {
    event.preventDefault();
    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    const totalPrice = calculateTotalPrice(startDate, endDate, price);

    try {
      const response = await axios.post('http://localhost:5000/bookings', {
        carId,
        userId: user._id,
        startDate,
        endDate,
        totalPrice,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error making booking:', error);
      alert(error.response?.data.message || 'Error making booking');
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <div>
        <label>Start Date</label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>
      <div>
        <label>End Date</label>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      </div>
      <div>
        <label>Total Price: {calculateTotalPrice(startDate, endDate, price)}</label>
      </div>
      <button type="submit">Make Booking</button>
    </form>
  );
};

export default BookingForm;

















