import { Menu } from '../Menu/Menu';
import styles from './Header.module.css';
import springLogo from '../../images/spring-logo.png';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={springLogo} alt="Logo" className={styles['header-img']} />
            <nav className={styles.nav}>
                <Menu />
            </nav>
        </header>
    );
};
