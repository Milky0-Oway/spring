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

    return (
        <>
            <ul className={classNames('menu', { 'menu--open': isMenuOpen })}>
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
            <span
                className={classNames('menu-icon', { 'menu-icon--open': isMenuOpen })}
                onClick={toggleMenu}
                style={{ backgroundImage: `url(${isMenuOpen ? crossIcon : menuIcon})` }}
            ></span>
        </>
    );
};
