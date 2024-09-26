import { useState } from 'react';
import classNames from 'classnames';
import { MENU } from '../../constants/constants';
import { MenuItem } from '../MenuItem/MenuItem';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';
import menuIcon from '../../images/menu.svg';
import crossIcon from '../../images/cross.svg';
import styles from './Menu.module.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const dispatch = useDispatch();

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleItemToggle = (point) => {
        if (activeItem === point) {
            setActiveItem(null);
        } else {
            setActiveItem(point);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <ul className={classNames(styles.menu, { [styles['menu--open']]: isMenuOpen })}>
                {MENU.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        isActive={activeItem === item.point}
                        onToggle={handleItemToggle}
                    />
                ))}
                <ThemeSwitcher />
            </ul>
            <button
                className={classNames(styles['menu-icon'], {
                    [styles['menu-icon--open']]: isMenuOpen,
                })}
                onClick={toggleMenu}
                style={{ backgroundImage: `url(${isMenuOpen ? crossIcon : menuIcon})` }}
            ></button>
            <button className={classNames(styles['logout-icon'])} onClick={handleLogout}></button>
        </>
    );
};
