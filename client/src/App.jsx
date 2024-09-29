import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { Projects } from './pages/Projects/Projects';
import { Login } from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={Projects} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
