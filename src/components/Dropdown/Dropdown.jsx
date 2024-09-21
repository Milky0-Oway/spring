import classNames from 'classnames';
import './Dropdown.css';

export const Dropdown = ({
    subpoints,
    additional,
    additionalPoint,
    additionalSubpoints,
    isHovered,
    isClicked,
}) => {
    const dropdownClass = classNames({
        dropdown: true,
        'dropdown--active': isHovered,
        'dropdown-mobile--active': isClicked,
    });

    return (
        <ul className={dropdownClass}>
            {subpoints.map((subpoint, index) => (
                <li key={index} className="dropdown-item">
                    <a className="dropdown-link" href="#">
                        {subpoint}
                    </a>
                </li>
            ))}
            {additional && (
                <>
                    <li className="dropdown-item dropdown-item--spacing">{additionalPoint}</li>
                    {additionalSubpoints.map((subpoint, index) => (
                        <li key={index} className="dropdown-item">
                            <a href="#" className="dropdown-link">
                                {subpoint}
                            </a>
                        </li>
                    ))}
                </>
            )}
        </ul>
    );
};
