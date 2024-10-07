import styles from './Input.module.css';

export const Input = ({ data, placeholder, type }) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} {...data} required />
    );
};
