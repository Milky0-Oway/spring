export const setQuery = (query) => ({
    type: 'SET_QUERY',
    payload: query,
});

export const updateFilteredItems = (items) => ({
    type: 'UPDATE_FILTERED_ITEMS',
    payload: items,
});

export const login = () => ({
    type: 'LOGIN',
});

export const logout = () => ({
    type: 'LOGOUT',
});
