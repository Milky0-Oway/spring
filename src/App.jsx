import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Projects } from './pages/Projects/Projects';
import { Login } from './pages/Login/Login';

export function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <Routes>
                <Route path='/' element={isAuthenticated ? <Projects /> : <Navigate to="/login" />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </Router>
    );
}
