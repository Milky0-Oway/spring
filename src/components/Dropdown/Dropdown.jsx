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
    return (
        <ul className={classNames('dropdown', {
            'dropdown--active': isHovered,
            'dropdown-mobile--active': isClicked,
        })}>
            {subpoints.map((subpoint) => (
                <li key={subpoint.id} className="dropdown-item">
                    <a className="dropdown-link" href="#">
                        {subpoint.name}
                    </a>
                </li>
            ))}
            {additional && (
                <>
                    <li className="dropdown-item dropdown-item--spacing">{additionalPoint}</li>
                    {additionalSubpoints.map((subpoint) => (
                        <li key={subpoint.id} className="dropdown-item">
                            <a href="#" className="dropdown-link">
                                {subpoint.name}
                            </a>
                        </li>
                    ))}
                </>
            )}
        </ul>
    );
};
