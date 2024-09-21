import { useState } from 'react';
import classNames from 'classnames';
import { MENU } from '../../constants/constants';
import { MenuItem } from '../MenuItem/MenuItem';
import menuIcon from '../../images/menu.svg';
import crossIcon from '../../images/cross.svg';
import './Menu.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleItemToggle = (point) => {
        if (activeItem === point) {
            setActiveItem(null);
        } else {
            setActiveItem(point);
        }
    };

    const menuIconClass = classNames({
        'menu-icon': true,
        'menu-icon--open': isMenuOpen,
    });

    const menuClass = classNames({
        menu: true,
        'menu--open': isMenuOpen,
    });

    return (
        <>
            <ul className={menuClass}>
                {MENU.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isActive={activeItem === item.point}
                        onToggle={handleItemToggle}
                    />
                ))}
                <ThemeSwitcher />
            </ul>
            <span
                className={menuIconClass}
                onClick={toggleMenu}
                style={{ backgroundImage: `url(${isMenuOpen ? crossIcon : menuIcon})` }}
            ></span>
        </>
    );
};
