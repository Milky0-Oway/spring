import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '../../router';
import { useState } from 'react';

export const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        setIsCheckingAuth(false);

        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, isCheckingAuth]);

    return isAuthenticated ? <Component /> : null;
};
