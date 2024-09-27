import styles from './SearchInput.module.css';

export const SearchInput = ({ query, onInputChange }) => {
    return (
        <div className={styles['search-container']}>
            <input
                type="text"
                className={styles['search-input']}
                value={query}
                onChange={onInputChange}
                placeholder="Search..."
            />
        </div>
    );
};
