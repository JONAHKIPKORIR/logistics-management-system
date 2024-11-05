// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, login } = require('../controllers/authController'); // 
const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', login); // Ensure login is correctly referenced

module.exports = router;
