// Load environment variables from .env file at the start
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');  // Importing path module
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS based on the configuration
app.use(cors());

// Import and use routes
const userRoutes = require('./src/routes/userRoutes');  // Assuming you have a file for user-related routes
app.use('/api/users', userRoutes);  // Example route for user-related APIs

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Serve the React app for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error: ', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
