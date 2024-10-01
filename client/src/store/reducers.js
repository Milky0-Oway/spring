import { combineReducers } from 'redux';

const initialState = {
    isAuthenticated: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, error: null };
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true };
        case 'LOGIN_FAILURE':
            return { ...state, isAuthenticated: false, error: action.error };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    auth: authReducer,
});
