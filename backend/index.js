require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS with specific origins
app.use(cors({
    origin: ['http://localhost:5173', 'https://my-doctor-app-u5ds.vercel.app'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
}));

// Serve React static files
const buildPath = process.env.BUILD_PATH || 'build';
app.use(express.static(path.join(__dirname, buildPath)));

// Import and use routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// Home route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Serve React app for non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, buildPath, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error: ', err.stack);
    if (err.name === 'CorsError') {
        return res.status(403).json({ error: 'CORS policy error!' });
    }
    res.status(500).json({ error: 'Something went wrong!' });
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
