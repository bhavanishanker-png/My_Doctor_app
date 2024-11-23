import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state to disable button during API call
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AppContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true); // Disable button immediately to prevent duplicate clicks

        try {
            // Send POST request to login API
            const response = await axios.post("https://github.com/bhavanishanker-png/My_Doctor_app.git/api/users/login", {
                email,
                password,
            });

            if (response.data.token) {
                // Store token in local storage
                localStorage.setItem("token", response.data.token);
                setIsAuthenticated(true);
                console.log("Login successful, token stored.");
                alert("Login successful");
                navigate("/"); // Redirect to home page
            }
        } catch (error) {
            // Handle various error scenarios
            if (error.response) {
                if (error.response.status === 401) {
                    setError("Invalid email or password. Please try again.");
                } else {
                    setError("An error occurred. Please try again later.");
                }
            } else if (error.request) {
                setError("Network error. Please check your internet connection.");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
            console.error("Login error:", error);
        } finally {
            setLoading(false); // Re-enable button after response or error
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-purple-600">Login</h2>
                <p className="text-sm text-center text-gray-600">
                    Please enter your credentials to access your account.
                </p>

                {error && (
                    <div className="text-red-600 text-center mt-2">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <button
                        onClick={() => alert("Forgot password flow goes here")}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot your password?
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
