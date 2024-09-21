import { useState, useEffect } from 'react';
import './Projects.css';
import { PROJECTS } from '../../constants/constants';

const DEBOUNCE_DELAY = 300;

export const Projects = () => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(PROJECTS);
    const [hasResults, setHasResults] = useState(true);

    useEffect(() => {
        const handler = setTimeout(() => {
            const lowerCaseQuery = query.toLowerCase().trim();
            const results = PROJECTS.filter((item) => {
                const title = item.name.toLowerCase();
                const description = item.description.toLowerCase();
                return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
            });

            setFilteredItems(results);
            setHasResults(results.length > 0);
        }, DEBOUNCE_DELAY);

        return () => clearTimeout(handler);
    }, [query]);

    const handleSearchInputChange = (event) => {
        setQuery(event.target.value);
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
            {!hasResults && <p className="no-results">No results found</p>}
            <div className="items-container">
                {filteredItems.map((item, index) => (
                    <div key={index} className="item">
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
