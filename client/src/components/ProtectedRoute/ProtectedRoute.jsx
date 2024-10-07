import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component: Component }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <></>;
    }

    if (isAuthenticated) {
        return <Component />;
    } else {
        return <Navigate to="/login" />;
    }
};
