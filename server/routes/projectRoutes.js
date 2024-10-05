const express = require('express');
const { getProjects } = require('../controllers/projectController');
const projectRoutes = express.Router();

projectRoutes.get('/', (req, res) => {
    getProjects(req, res);
});

module.exports = { projectRoutes };
