import { useState } from 'react';
import './ThemeSwitcher.css';
import classNames from 'classnames';

export const ThemeSwitcher = () => {
    const [isActive, setIsActive] = useState(false);

    const handleThemeToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <li className="menu-item">
            <div className="theme-switcher">
                <button
                    type="button"
                    className={classNames('switch-label', { 'switch-label--active': isActive })}
                    onClick={handleThemeToggle}
                    aria-pressed={isActive}
                >
                    <span className={classNames('switch-icon', { 'switch-icon--active': isActive })} />
                </button>
            </div>
        </li>
    );
};
