import { PROJECTS } from './constants/constants';

const initialState = {
    query: '',
    filteredItems: PROJECTS,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, query: action.payload };
        case 'UPDATE_FILTERED_ITEMS':
            return { ...state, filteredItems: action.payload };
        default:
            return state;
    }
};
