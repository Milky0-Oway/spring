import styles from './ProjectsList.module.css';
import { Project } from '../Project/Project';


export const ProjectsList = ({ filteredItems }) => {
   const isEmpty = filteredItems.length === 0;

    return (
        <section className={styles.projects}>
            {isEmpty && <p className={styles['no-results']}>No results found</p>}
            <div className={styles['items-container']}>
                {filteredItems.map((item) => (
                    <Project key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};
