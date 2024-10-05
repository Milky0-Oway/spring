const { db } = require('../config/db');

const getAllProjects = async () => {
    try {
        const result = await db.query(`
            SELECT projects.id, projects.name, projects.description, assets.path AS image
            FROM projects
            LEFT JOIN assets ON projects.asset_id = assets.id
        `);
        return result.rows;
    } catch (error) {
        throw new Error(`Error fetching projects: ${error}`);
    }
};

module.exports = {
    getAllProjects,
};
