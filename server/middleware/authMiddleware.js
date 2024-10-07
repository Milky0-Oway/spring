const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();

exports.verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(400).json({ message: 'Access token is missing' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: 'Invalid or expired access token' });
        req.user = user;
        next();
    });
};
