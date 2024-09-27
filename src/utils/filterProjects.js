export const filterProjects = (projects, query) => {
    const lowerCaseQuery = query.toLowerCase().trim();
    return projects.filter((item) => {
        const title = item.name.toLowerCase();
        const description = item.description.toLowerCase();
        return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
    });
};
