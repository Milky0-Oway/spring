const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../config/db');
const dotenv = require('dotenv');

dotenv.config();

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '15m',
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });
};

const signup = async (req, res) => {
    const { username, password, repeatPassword, firstName, lastName, age } = req.body;

    let errors = {
        password: '',
    };

    if (username.length < 3) {
        errors.username = 'Username must contain 3 symbols or more';
    }

    if (password.length < 4) {
        errors.password += 'Password must contain 4 symbols or more';
    }

    if (password !== repeatPassword) {
        errors.repeatPassword = 'Passwords do not match';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (!passwordRegex.test(password)) {
        if (errors.password) errors.password += ' and ';
        errors.password += 'Password must contain at least 1 number and 1 letter';
    }

    if (firstName.length < 3) {
        errors.firstName = 'First name must contain 3 symbols or more';
    }

    if (lastName.length < 3) {
        errors.lastName = 'Last name must contain 3 symbols or more';
    }

    if (isNaN(age) || age <= 0) {
        errors.age = 'Age must be a positive number';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.query(
            'INSERT INTO users (username, password, first_name, last_name, age) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, hashedPassword, firstName, lastName, age],
        );

        const user = newUser.rows[0];

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(201).json({
            message: 'User registered successfully',
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ message: `Error registering user: ${error}` });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userQuery = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = userQuery.rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: `Login failed: ${error}` });
    }
};

const refreshToken = (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh Token is required' });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });

        const newAccessToken = generateAccessToken(user);
        res.status(200).json({ accessToken: newAccessToken });
    });
};

module.exports = { signup, login, refreshToken };
