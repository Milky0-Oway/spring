const { getAllProjects } = require('../models/projectModel');

const getProjects = async (req, res) => {
    try {
        const query = req.query.searchQuery ? req.query.searchQuery.toLowerCase().trim() : '';
        const projects = await getAllProjects();

        if (!projects || projects.length === 0) {
            return res.status(404).json({ message: 'No projects found' });
        }

        const filteredProjects = projects.filter((project) => {
            const title = project.name.toLowerCase();
            const description = project.description.toLowerCase();
            return title.includes(query) || description.includes(query);
        });

        res.status(200).json(filteredProjects);
    } catch (error) {
        res.status(500).json({ message: `Failed to fetch projects: ${error.message}` });
    }
};

module.exports = {
    getProjects,
};
