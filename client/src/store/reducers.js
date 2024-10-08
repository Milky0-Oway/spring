import { combineReducers } from 'redux';

const initialState = {
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VALIDATE_TOKEN_REQUEST':
            return { ...state, loading: true };
        case 'LOGIN_REQUEST':
        case 'REGISTER_REQUEST':
        case 'RESET':
            return { ...state, error: null };
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return { ...state, isAuthenticated: true, loading: false, error: null };
        case 'LOGIN_FAILURE':
        case 'REGISTER_FAILURE':
            return { ...state, isAuthenticated: false, error: action.error, loading: false };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, loading: false };
        case 'VALIDATE_TOKEN_FINISHED':
            return { ...state, loading: false };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    auth: authReducer,
});
