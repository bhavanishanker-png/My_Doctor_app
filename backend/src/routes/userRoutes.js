const express = require('express');
const { signup, login, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Correct import

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Protected route to fetch the user profile
// router.get('/api/user/profile', authMiddleware, getUserProfile); // Correct middleware name

module.exports = router;
