import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import './MenuItem.css';
import classNames from 'classnames';

export const MenuItem = ({ item, isActive, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        onToggle(item.point);
    };

    const menuLinkClass = classNames({
        'menu-link': true,
        'menu-link--active': isActive,
    });

    return (
        <li
            className="menu-item"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a className={menuLinkClass} href="#">
                {item.point}
            </a>
            <Dropdown
                subpoints={item.subpoints}
                additional={item.additional}
                additionalPoint={item.additionalPoint}
                additionalSubpoints={item.additionalSubpoints}
                isHovered={isHovered}
                isClicked={isActive}
            />
        </li>
    );
};
