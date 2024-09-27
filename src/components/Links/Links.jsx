import styles from './Links.module.css';
import { FOOTER_LINKS } from '../../constants/constants';
import classNames from 'classnames';

export const Links = () => {
    return (
        <div className={styles['links-container']}>
            {FOOTER_LINKS.map((linkList) => (
                <div key={linkList.id} className={styles['links-wrapper']}>
                    {linkList.array.map((links) => (
                        <ul key={links.id} className={styles.links}>
                            {links.array.map((linkInfo) => (
                                <li key={linkInfo.id} className={styles['link-item']}>
                                    <a
                                        className={classNames(styles.link, {
                                            [styles['link--bold']]: linkInfo.bold,
                                        })}
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
