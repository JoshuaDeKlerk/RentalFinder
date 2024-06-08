import React from 'react';
import './componentCSS/CheckoutModals.css';

const CheckoutModal = ({ show, handleClose, handlePayment, bookingData }) => {
  if (!show) return null;

  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal">
        <h2>Checkout</h2>
        <p>Car: {bookingData.carName}</p>
        <p>Total Price: {bookingData.totalPrice}</p>
        <form onSubmit={handlePayment} className="payment-form">
          <label>Card Number</label>
          <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" required />
          <label>Expiry Date</label>
          <input type="text" name="expiryDate" placeholder="MM/YY" required />
          <label>CVV</label>
          <input type="text" name="cvv" placeholder="123" required />
          <button type="submit">Pay Now</button>
        </form>
        <button className="close-button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
