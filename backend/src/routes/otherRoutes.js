const express = require('express');
const router = express.Router();

// Define your routes here, e.g., for other API endpoints
router.get('/example', (req, res) => {
  res.json({ message: 'This is an example route' });
});

module.exports = router;