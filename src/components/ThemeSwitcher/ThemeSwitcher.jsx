import { useState } from 'react';
import styles from './ThemeSwitcher.module.css';
import classNames from 'classnames';

export const ThemeSwitcher = () => {
    const [isActive, setIsActive] = useState(false);

    const handleThemeToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <li className={styles["menu-item"]}>
            <div className={styles["theme-switcher"]}>
                <button
                    type="button"
                    className={classNames(styles['switch-label'], { [styles['switch-label--active']]: isActive })}
                    onClick={handleThemeToggle}
                    aria-pressed={isActive}
                >
                    <span
                        className={classNames(styles['switch-icon'], { [styles['switch-icon--active']]: isActive })}
                    />
                </button>
            </div>
        </li>
    );
};
