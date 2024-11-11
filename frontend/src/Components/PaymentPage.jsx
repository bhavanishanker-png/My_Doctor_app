import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [amountToPay, setAmountToPay] = useState(100);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardNumberError, setCardNumberError] = useState('');
    const [expiryDateError, setExpiryDateError] = useState('');

    const navigate = useNavigate();

    const formatCardNumber = (number) => {
        const cleanNumber = number.replace(/\D/g, '');
        const formattedNumber = cleanNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
        return formattedNumber;
    };

    const formatExpiryDate = (date) => {
        const cleanDate = date.replace(/\D/g, '');
        const formattedDate = cleanDate.replace(/(\d{2})(?=\d)/, '$1/');
        return formattedDate.slice(0, 5);
    };

    const handlePayment = () => {
        if (paymentMethod === 'creditCard') {
            if (!cardNumber || !expiryDate || !cvv) {
                alert("Please fill in all card details.");
                return;
            }

            if (cardNumber.replace(/\D/g, '').length !== 16) {
                setCardNumberError('Card number must be 16 digits.');
                return;
            }

            if (expiryDate.replace(/\D/g, '').length !== 4) {
                setExpiryDateError('Expiry date must be in MM/YY format.');
                return;
            }

            setCardNumberError('');
            setExpiryDateError('');
        }

        alert(`Proceeding to pay $${amountToPay} with ${paymentMethod}`);
        navigate("/confirmation");
    };

    const handleCardNumberChange = (e) => {
        const formattedNumber = formatCardNumber(e.target.value);
        setCardNumber(formattedNumber);
    };

    const handleExpiryDateChange = (e) => {
        const formattedDate = formatExpiryDate(e.target.value);
        setExpiryDate(formattedDate);
    };

    return (
        <div className="payment-container flex flex-col items-center justify-center p-5">
            <h2 className="text-xl font-semibold mb-4">Your Payment Details</h2>

            <div className="amount-to-pay mb-6 text-lg font-bold">
                <span>Total Amount to Pay: </span>
                <span className="text-green-600">${amountToPay}</span>
            </div>

            <div className="payment-method mb-4">
                <label>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit Card
                </label>
            </div>

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
                            maxLength={19}
                            pattern="\d*"
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
                                maxLength={5}
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
                                maxLength={3}
                            />
                        </div>
                    </div>
                </div>
            )}

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
