import { Menu } from '../Menu/Menu';
import './Header.css';
import springLogo from '../../images/spring-logo.png';

export const Header = () => {
    return (
        <header className="header">
            <img src={springLogo} alt="Logo" className="header-img" />
            <nav className="nav">
                <Menu />
            </nav>
        </header>
    );
};
