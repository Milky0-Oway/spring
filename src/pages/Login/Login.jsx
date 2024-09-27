import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import styles from './Login.module.css';
import { useFormInput } from '../../hooks/useFormInput';
import { Button } from '../../components/Button/Button';
import { navigate } from '../../router';

export const Login = () => {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();

        const envLogin = process.env.REACT_APP_LOGIN;
        const envPassword = process.env.REACT_APP_PASSWORD;

        if (username.value === envLogin && password.value === envPassword) {
            dispatch(login());
            navigate('/');
        } else {
            setError('Incorrect username or password');
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles['login-container']}>
                <h2 className={styles['login-header']}>Welcome back!</h2>
                <form onSubmit={handleLogin} className={styles['login-form']}>
                    <div className={styles['login-item']}>
                        <input
                            className={styles['login-input']}
                            type="text"
                            placeholder="Login"
                            {...username}
                            required
                        />
                    </div>
                    <div className={styles['login-item']}>
                        <input
                            className={styles['login-input']}
                            type="password"
                            placeholder="Password"
                            {...password}
                            required
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </div>
    );
};
