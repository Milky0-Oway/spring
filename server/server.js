const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PROJECTS } = require('./projects');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const envLogin = process.env.LOGIN;
const envPassword = process.env.PASSWORD;

let unusedVariable = 39;

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login === envLogin && password === envPassword) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/projects', (req, res) => {
    const query = req.query.searchQuery ? req.query.searchQuery.toLowerCase().trim() : '';

    const filteredProjects = PROJECTS.filter((project) => {
        const title = project.name.toLowerCase();
        const description = project.description.toLowerCase();
        return title.includes(query) || description.includes(query);
    });

    res.status(200).json(filteredProjects);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
