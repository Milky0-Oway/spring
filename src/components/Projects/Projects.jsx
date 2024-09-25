import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Projects.css';
import { PROJECTS } from '../../constants/constants';
import { setQuery, updateFilteredItems } from '../../actions';
import { filterProjects } from '../../utils/filterProjects';

const DEBOUNCE_DELAY = 300;

export const Projects = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);
    const filteredItems = useSelector((state) => state.filteredItems);
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
        <section className="projects">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    value={query}
                    onChange={handleSearchInputChange}
                    placeholder="Search..."
                />
            </div>
            {isEmpty && <p className="no-results">No results found</p>}
            <div className="items-container">
                {filteredItems.map((item) => (
                    <div key={item.id} className="item">
                        <img className="item-img" src={`./images/${item.image}`} alt="Item Icon" />
                        <div className="item-text">
                            <h3 className="item-header">{item.name}</h3>
                            <p className="item-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
