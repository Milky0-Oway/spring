const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { projectRoutes } = require('./routes/projectRoutes');
const { authRoutes } = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/projects', projectRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
