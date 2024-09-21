import './Links.css';
import { FOOTER_LINKS } from '../../constants/constants';

export const Links = () => {
    return (
        <div className="links-container">
            {FOOTER_LINKS.map((linkList, index) => (
                <div key={index} className="links-wrapper">
                    {linkList.map((links, index) => (
                        <ul key={index} className="links">
                            {links.map((linkInfo, index) => (
                                <li key={index} className="link-item">
                                    <a
                                        className={`link ${linkInfo.bold ? 'link--bold' : ''}`}
                                        href="#"
                                    >
                                        {linkInfo.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};
