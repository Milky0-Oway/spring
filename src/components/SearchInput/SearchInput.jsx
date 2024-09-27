import { useState, useEffect } from 'react';
import styles from './SearchInput.module.css';

const DEBOUNCE_DELAY = 300;

export const SearchInput = ({ onDebouncedInputChange }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            onDebouncedInputChange(query);
        }, DEBOUNCE_DELAY);

        return () => clearTimeout(handler);
    }, [query, onDebouncedInputChange]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles['search-container']}>
            <input
                type="text"
                className={styles['search-input']}
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </div>
    );
};
