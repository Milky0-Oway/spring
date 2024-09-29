export const login = (credentials) => async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } else {
            dispatch({ type: 'LOGIN_FAILURE', error: data.message });
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', error: error.message });
    }
};

export const logout = () => ({
    type: 'LOGOUT',
});
