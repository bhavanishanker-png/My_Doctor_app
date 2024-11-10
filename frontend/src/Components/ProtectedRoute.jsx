// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        // If not authenticated, redirect to login page
        alert("Login To Continue")
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the component
    return children;
};

export default ProtectedRoute;
