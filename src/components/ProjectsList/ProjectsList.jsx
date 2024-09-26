import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProjectsList.module.css';
import { PROJECTS } from '../../constants/constants';
import { setQuery, updateFilteredItems } from '../../actions';
import { filterProjects } from '../../utils/filterProjects';

const DEBOUNCE_DELAY = 300;

export const ProjectsList = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.projects.query);
    const filteredItems = useSelector((state) => state.projects.filteredItems);
    const isEmpty = filteredItems.length === 0;

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
            <div className={styles["search-container"]}>
                <input
                    type="text"
                    className={styles["search-input"]}
                    value={query}
                    onChange={handleSearchInputChange}
                    placeholder="Search..."
                />
            </div>
            {isEmpty && <p className={styles["no-results"]}>No results found</p>}
            <div className={styles["items-container"]}>
                {filteredItems.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img className={styles["item-img"]} src={`./images/${item.image}`} alt="Item Icon" />
                        <div className={styles["item-text"]}>
                            <h3 className={styles["item-header"]}>{item.name}</h3>
                            <p className={styles["item-description"]}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
