// Load environment variables from .env file at the start
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS based on the configuration
app.use(cors());

// Import and use routes
const userRoutes = require('./routes/userRoutes');  // Assuming you have a file for user-related routes
app.use('/api/users', userRoutes);  // Example route for user-related APIs

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

app.use((err, req, res, next) => {
  console.error('Error: ', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
