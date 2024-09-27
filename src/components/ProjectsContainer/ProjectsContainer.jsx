import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProjectsContainer.module.css';
import { PROJECTS } from '../../constants/constants';
import { setQuery, updateFilteredItems } from '../../actions';
import { filterProjects } from '../../utils/filterProjects';
import { ProjectsList } from '../ProjectsList/ProjectsList';
import { SearchInput } from '../SearchInput/SearchInput';

export const ProjectsContainer = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.projects.query);
    const filteredItems = useSelector((state) => state.projects.filteredItems);

    useEffect(() => {
        const results = filterProjects(PROJECTS, query);
        dispatch(updateFilteredItems(results));
    }, [query, dispatch]);

    const handleSearchInputChange = (debouncedQuery) => {
        dispatch(setQuery(debouncedQuery));
    };

    return (
        <section className={styles.projects}>
            <SearchInput onDebouncedInputChange={handleSearchInputChange} />
            <ProjectsList filteredItems={filteredItems} />
        </section>
    );
};
