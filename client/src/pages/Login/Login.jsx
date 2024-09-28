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

    const handleLogin = async (event) => {
        event.preventDefault();

        const loginData = { login: username, password: password };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.status === 200) {
                dispatch(login());
                navigate('/');
            } else {
                setError('Incorrect username or password');
            }
        } catch (error) {
            setError('Error during login ' + error);
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
