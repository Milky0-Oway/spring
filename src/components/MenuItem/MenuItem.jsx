import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './MenuItem.module.css';
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

    return (
        <li
            className={styles["menu-item"]}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a className={classNames(styles['menu-link'], { [styles['menu-link--active']]: isActive })} href="#">
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
