import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validateToken } from './store/actions';
import { useEffect } from 'react';
import { Projects } from './pages/Projects/Projects';
import { Login } from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Signup } from './pages/Signup/Signup';

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(validateToken());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={Projects} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}
