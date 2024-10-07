const express = require('express');
const { getProjects } = require('../controllers/projectController');
const { verifyAccessToken } = require('../middleware/authMiddleware');
const projectRoutes = express.Router();

projectRoutes.get('/', verifyAccessToken, (req, res) => {
    getProjects(req, res);
});

module.exports = { projectRoutes };
