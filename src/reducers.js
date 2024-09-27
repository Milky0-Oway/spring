import { PROJECTS } from './constants/constants';
import { combineReducers } from 'redux';

const authReducer = (state = { isAuthenticated: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuthenticated: true };
        case 'LOGOUT':
            return { isAuthenticated: false };
        default:
            return state;
    }
};

const projectReducer = (state = { query: '', filteredItems: PROJECTS }, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, query: action.payload };
        case 'UPDATE_FILTERED_ITEMS':
            return { ...state, filteredItems: action.payload };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
});
