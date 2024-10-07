const express = require('express');
const { signup, login, refreshToken } = require('../controllers/authController');
const { verifyAccessToken } = require('../middleware/authMiddleware');
const authRoutes = express.Router();

authRoutes.post('/login', login);
authRoutes.post('/signup', signup);
authRoutes.post('/refresh-token', refreshToken);
authRoutes.post('/verify-token', verifyAccessToken, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});

module.exports = { authRoutes };
