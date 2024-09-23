import './Links.css';
import { FOOTER_LINKS } from '../../constants/constants';

export const Links = () => {
    return (
        <div className="links-container">
            {FOOTER_LINKS.map((linkList) => (
                <div key={linkList.id} className="links-wrapper">
                    {linkList.array.map((links) => (
                        <ul key={links.id} className="links">
                            {links.array.map((linkInfo) => (
                                <li key={linkInfo.id} className="link-item">
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
