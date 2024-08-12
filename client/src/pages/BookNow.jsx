import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookNow() {
  const { itemId } = useParams();
  const [contactInfo, setContactInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    accountNumber: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking details submitted', { itemId, contactInfo, paymentInfo });

    // Set success message
    setBookingSuccess(true);

    // Optionally, reset the form fields
    setContactInfo('');
    setPaymentInfo({
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
      accountNumber: '',
    });
  };

  return (
    <div className="book-now-container p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Book Now</h2>
      {bookingSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded">
          <p>Congratulations, your booking has been successful!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Contact Information</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Card Expiry Date</label>
            <input
              type="text"
              name="cardExpiry"
              value={paymentInfo.cardExpiry}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Card CVV</label>
            <input
              type="text"
              name="cardCVV"
              value={paymentInfo.cardCVV}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Account Number (Optional)</label>
            <input
              type="text"
              name="accountNumber"
              value={paymentInfo.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
}
