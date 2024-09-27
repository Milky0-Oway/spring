import classNames from 'classnames';
import styles from './Dropdown.module.css';

export const Dropdown = ({
    subpoints,
    additional,
    additionalPoint,
    additionalSubpoints,
    isHovered,
    isClicked,
}) => {
    return (
        <ul
            className={classNames(styles.dropdown, {
                [styles['dropdown--active']]: isHovered,
                [styles['dropdown-mobile--active']]: isClicked,
            })}
        >
            {subpoints.map((subpoint) => (
                <li key={subpoint.id} className={styles['dropdown-item']}>
                    <a className={styles['dropdown-link']} href="#">
                        {subpoint.name}
                    </a>
                </li>
            ))}
            {additional && (
                <>
                    <li
                        className={classNames(
                            styles['dropdown-item'],
                            styles['dropdown-item--spacing'],
                        )}
                    >
                        {additionalPoint}
                    </li>
                    {additionalSubpoints.map((subpoint) => (
                        <li key={subpoint.id} className={styles['dropdown-item']}>
                            <a href="#" className={styles['dropdown-link']}>
                                {subpoint.name}
                            </a>
                        </li>
                    ))}
                </>
            )}
        </ul>
    );
};
