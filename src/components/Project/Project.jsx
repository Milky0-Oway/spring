import styles from './Project.module.css';

export const Project = ({item}) => {
    return(
        <div className={styles.item}>
            <img
                className={styles['item-img']}
                src={`./images/${item.image}`}
                alt="Item Icon"
            />
            <div className={styles['item-text']}>
                <h3 className={styles['item-header']}>{item.name}</h3>
                <p className={styles['item-description']}>{item.description}</p>
            </div>
        </div>
    )
}