import { useState } from 'react';
import './ThemeSwitcher.css';
import classNames from 'classnames';

export const ThemeSwitcher = () => {
    const [isActive, setIsActive] = useState(false);

    const handleThemeToggle = () => {
        setIsActive(!isActive);
    };

    const switchLabelClass = classNames({
        'switch-label': true,
        'switch-label--active': isActive,
    });

    const switchIconClass = classNames({
        'switch-icon': true,
        'switch-icon--active': isActive,
    });

    return (
        <li className="menu-item">
            <div className="theme-switcher">
                <input type="checkbox" id="switch" className="switch-input" checked={isActive} />
                <label htmlFor="switch" className={switchLabelClass} onClick={handleThemeToggle}>
                    <span className={switchIconClass} />
                </label>
            </div>
        </li>
    );
};
