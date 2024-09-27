import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProjectsContainer.module.css';
import { PROJECTS } from '../../constants/constants';
import { setQuery, updateFilteredItems } from '../../actions';
import { filterProjects } from '../../utils/filterProjects';
import { ProjectsList } from '../ProjectsList/ProjectsList';
import { SearchInput } from '../SearchInput/SearchInput';

const DEBOUNCE_DELAY = 300;

export const ProjectsContainer = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.projects.query);
    const filteredItems = useSelector((state) => state.projects.filteredItems);

    useEffect(() => {
        const handler = setTimeout(() => {
            const results = filterProjects(PROJECTS, query);
            dispatch(updateFilteredItems(results));
        }, DEBOUNCE_DELAY);

        return () => clearTimeout(handler);
    }, [query, dispatch]);

    const handleSearchInputChange = (event) => {
        dispatch(setQuery(event.target.value));
    };

    return (
        <section className={styles.projects}>
            <SearchInput query={query} onInputChange={handleSearchInputChange} />
            <ProjectsList filteredItems={filteredItems} />
        </section>
    );
};
