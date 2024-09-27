import { Projects } from './pages/Projects/Projects';
import { Login } from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useCustomRouter } from './router';

export function App() {
    const currentPath = useCustomRouter();

    const renderPage = () => {
        switch (currentPath) {
            case '/':
                return <ProtectedRoute component={Projects} />;
            case '/login':
                return <Login />;
            default:
                return <h2>404 - Not Found</h2>;
        }
    };

    return <>{renderPage()}</>;
}
