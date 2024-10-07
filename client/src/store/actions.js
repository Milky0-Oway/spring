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
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } else {
            dispatch({ type: 'LOGIN_FAILURE', error: { general: data.message } });
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', error: { general: error.message } });
    }
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const reset = () => ({
    type: 'RESET',
});

export const register = (userData) => async (dispatch) => {
    dispatch({ type: 'REGISTER_REQUEST' });

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.status === 201) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            dispatch({ type: 'REGISTER_SUCCESS', payload: data });
        } else if (response.status === 400 && data.errors) {
            dispatch({ type: 'REGISTER_FAILURE', error: data.errors });
        } else {
            dispatch({ type: 'REGISTER_FAILURE', error: { general: data.message } });
        }
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', error: { general: error.message } });
    }
};

export const validateToken = () => async (dispatch) => {
    dispatch({ type: 'VALIDATE_TOKEN_REQUEST' });

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
        dispatch({ type: 'LOGOUT' });
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/verify-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS' });
        } else if (response.status === 401) {
            const refreshResponse = await fetch('http://localhost:5000/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (refreshResponse.status === 200) {
                const data = await refreshResponse.json();
                localStorage.setItem('accessToken', data.accessToken);
                dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                dispatch({ type: 'LOGOUT' });
            }
        }
    } catch (error) {
        dispatch({ type: 'LOGOUT' });
    } finally {
        dispatch({ type: 'VALIDATE_TOKEN_FINISHED' });
    }
};
