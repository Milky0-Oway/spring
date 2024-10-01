import { useEffect, useState } from 'react';
import styles from './ProjectsContainer.module.css';
import { ProjectsList } from '../ProjectsList/ProjectsList';
import { SearchInput } from '../SearchInput/SearchInput';

export const ProjectsContainer = () => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async (searchQuery) => {
            try {
                const response = await fetch(`http://localhost:5000/projects?searchQuery=${searchQuery}`);
                const projects = await response.json();
                setFilteredItems(projects);
            } catch (error) {
                setError('Error fetching projects:' + error);
            }
        };

        fetchProjects(query);
    }, [query]);

    const handleSearchInputChange = (debouncedQuery) => {
        setQuery(debouncedQuery);
    };

    return (
        <section className={styles.projects}>
            <SearchInput onDebouncedInputChange={handleSearchInputChange} />
            {error && <p className={styles.error}>{error}</p>}
            <ProjectsList filteredItems={filteredItems} />
        </section>
    );
};
