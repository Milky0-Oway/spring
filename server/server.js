const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { projectRoutes } = require('./routes/projectRoutes');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/projects', projectRoutes);

const envLogin = process.env.LOGIN;
const envPassword = process.env.PASSWORD;

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login === envLogin && password === envPassword) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
