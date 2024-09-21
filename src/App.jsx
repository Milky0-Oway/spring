import springLogo from './images/spring-logo.png';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Description } from './components/Description/Description';

function App() {
    return (
        <>
            <header className="header">
                <img src={springLogo} alt="Logo" className="header-img" />
                <nav className="nav">
                    <Menu />
                </nav>
            </header>
            <main>
                <Description/>
            </main>
        </>
    );
}

export default App;
