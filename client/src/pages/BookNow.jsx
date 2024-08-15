
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = `${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;
      setPaymentInfo((prevState) => ({
        ...prevState,
        cardExpiry: formattedDate,
      }));
    }
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
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Book Now</h2>
      </div>
      {bookingSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded text-center">
          <p>Congratulations, your booking has been successful!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full max-w-md">
            <label className="block text-sm font-semibold mb-2">Contact Information</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your contact information"
              required
            />
          </div>
          <div className="mb-4 w-full max-w-md">
            <label className="block text-sm font-semibold mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="mb-4 w-full max-w-md">
            <label className="block text-sm font-semibold mb-2">Card Expiry Date</label>
            <DatePicker
              selected={paymentInfo.cardExpiry ? new Date(`01/${paymentInfo.cardExpiry}`) : null}
              onChange={handleDateChange}
              dateFormat="MM/yy"
              showMonthYearPicker
              className="w-full p-2 border border-gray-300 rounded"
              placeholderText="MM/YY"
              wrapperClassName="date-picker-wrapper"
              required
            />
          </div>
          <div className="mb-4 w-full max-w-md">
            <label className="block text-sm font-semibold mb-2">Card CVV</label>
            <input
              type="text"
              name="cardCVV"
              value={paymentInfo.cardCVV}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your card CVV"
              required
            />
          </div>
          <div className="mb-4 w-full max-w-md">
            <label className="block text-sm font-semibold mb-2">Account Number (Optional)</label>
            <input
              type="text"
              name="accountNumber"
              value={paymentInfo.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your account number (if applicable)"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            Submit Booking
          </button>
        </form>
      )}
      <style jsx>{`
        .date-picker-wrapper {
          display: block;
          width: 100%;
        }

        .react-datepicker-wrapper {
          width: 100%;
        }

        .react-datepicker__input-container {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
