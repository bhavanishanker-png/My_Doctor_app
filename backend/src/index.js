// Load environment variables from .env file at the start
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Using the Stripe secret key from .env
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://your-frontend-url.com' : '*', // Allow all origins in dev, restrict in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Enable CORS based on the configuration
app.use(cors());

// Import and use routes
const userRoutes = require('./routes/userRoutes');  // Assuming you have a file for user-related routes
app.use('/api/users', userRoutes);  // Example route for user-related APIs

// Home route API
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Route to create payment intent
// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error: ', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
