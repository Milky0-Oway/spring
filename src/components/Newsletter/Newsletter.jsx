import { Button } from '../Button/Button';
import styles from './Newsletter.module.css';

export const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h1 className={styles["newsletter-header"]}>Get the Spring newsletter</h1>
            <p className={styles["newsletter-text"]}>Stay connected with the Spring newsletter</p>
            <Button>Subscribe</Button>
        </div>
    );
};
