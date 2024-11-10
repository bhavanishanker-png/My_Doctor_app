import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const PaymentPage = () => {
    // Assuming the amount is stored in the state
    const [amountToPay, setAmountToPay] = useState(100);  // Set your initial amount here
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');  // Payment method state
    const [cardNumberError, setCardNumberError] = useState(''); // Error state for card number
    const [expiryDateError, setExpiryDateError] = useState(''); // Error state for expiry date

    // Create a navigate function
    const navigate = useNavigate();

    // Function to format card number with space after every four digits
    const formatCardNumber = (number) => {
        // Remove any non-digit characters
        const cleanNumber = number.replace(/\D/g, '');
        
        // Add spaces after every 4 digits
        const formattedNumber = cleanNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

        return formattedNumber;
    };

    // Function to format expiry date as MM/YY
    const formatExpiryDate = (date) => {
        // Remove any non-digit characters
        const cleanDate = date.replace(/\D/g, '');
        
        // Add slash after two digits (MM/YY)
        const formattedDate = cleanDate.replace(/(\d{2})(?=\d)/, '$1/');

        return formattedDate.slice(0, 5); // Limit to 5 characters (MM/YY)
    };

    // Handle payment submission
    const handlePayment = () => {
        if (paymentMethod === 'creditCard') {
            // Validate card number length (should be 16 digits)
            if (!cardNumber || !expiryDate || !cvv) {
                alert("Please fill in all card details.");
                return;
            }

            if (cardNumber.replace(/\D/g, '').length !== 16) {  // Check after removing spaces
                setCardNumberError('Card number must be 16 digits.');
                return;
            }

            if (expiryDate.replace(/\D/g, '').length !== 4) {  // Validate that expiry date has 4 digits
                setExpiryDateError('Expiry date must be in MM/YY format.');
                return;
            }

            setCardNumberError(''); // Clear error if validation passes
            setExpiryDateError(''); // Clear error if validation passes
        }

        alert(`Proceeding to pay $${amountToPay} with ${paymentMethod}`);
        navigate("/confirmation");
    };

    // Handle card number input change
    const handleCardNumberChange = (e) => {
        const formattedNumber = formatCardNumber(e.target.value);
        setCardNumber(formattedNumber);
    };

    // Handle expiry date input change
    const handleExpiryDateChange = (e) => {
        const formattedDate = formatExpiryDate(e.target.value);
        setExpiryDate(formattedDate);
    };

    return (
        <div className="payment-container flex flex-col items-center justify-center p-5">
            <h2 className="text-xl font-semibold mb-4">Your Payment Details</h2>

            {/* Display the amount */}
            <div className="amount-to-pay mb-6 text-lg font-bold">
                <span>Total Amount to Pay: </span>
                <span className="text-green-600">${amountToPay}</span>
            </div>

            {/* Payment Method Selection */}
            <div className="payment-method mb-4">
                <label className="mr-4">
                    <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit Card
                </label>
                <label className="mr-4">
                    <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    PayPal
                </label>
                <label>
                    <input
                        type="radio"
                        value="cashOnDelivery"
                        checked={paymentMethod === 'cashOnDelivery'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Cash on Delivery
                </label>
            </div>

            {/* Card details form, only shown if payment method is Credit Card */}
            {paymentMethod === 'creditCard' && (
                <div className="card-details mb-6">
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="p-2 border rounded w-full"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19} // Limit input length to 19 characters (16 digits + 3 spaces)
                            pattern="\d*" // Only allow numbers
                        />
                        {cardNumberError && <p className="text-red-500 text-sm">{cardNumberError}</p>}
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="expiryDate" className="block">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                className="p-2 border rounded w-full"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                maxLength={5} // Limit to 5 characters (MM/YY)
                            />
                            {expiryDateError && <p className="text-red-500 text-sm">{expiryDateError}</p>}
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="cvv" className="block">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                className="p-2 border rounded w-full"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                maxLength={3} // Limit CVV input to 3 digits
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Proceed to Payment Button */}
            <button
                className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handlePayment}
            >
                Proceed to Payment
            </button>
        </div>
    );
};

export default PaymentPage;
