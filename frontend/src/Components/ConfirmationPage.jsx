import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const ConfirmationPage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Appointment Confirmed!</h2>
      <p>Your appointment has been successfully booked. You will receive a confirmation email shortly.</p>
      
      {/* Button to navigate to the home page */}
      <button
        className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => navigate("/")}  // Use navigate function here
      >
        Go to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
