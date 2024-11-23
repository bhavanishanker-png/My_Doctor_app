import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error state to store error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error messages
        try {
            const response = await axios.post("https://my-doctor-app-u5ds.vercel.app/api/users/signup", {
                name,
                email,
                password,
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                console.log("Signup successful, token stored.");
                alert("Signup successful");
                navigate("/login"); // Redirect user to login page after successful signup
            }
        } catch (error) {
            // Check if error is due to server response or network issue
            if (error.response) {
                // Server responded with an error
                if (error.response.status === 400) {
                    setError("Email is already in use or invalid data provided.");
                } else {
                    setError("An error occurred. Please try again later.");
                }
            } else if (error.request) {
                // No response received from the server
                setError("Network error. Please check your internet connection.");
            } else {
                // Something went wrong while setting up the request
                setError("An unexpected error occurred. Please try again.");
            }
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-700">Sign Up</h2>
                <p className="text-sm text-center text-gray-600">
                    Create your account by filling in the information below.
                </p>

                {error && (
                    <div className="text-red-600 text-center mt-2">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
