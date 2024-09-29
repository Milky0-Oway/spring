import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import styles from './Login.module.css';
import { useFormInput } from '../../hooks/useFormInput';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const username = useFormInput('');
    const password = useFormInput('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authError = useSelector((state) => state.auth.error);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleLogin = async (event) => {
        event.preventDefault();
        const loginData = { login: username.value, password: password.value };
        dispatch(login(loginData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

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
                    {authError && <p className={styles.error}>{authError}</p>}
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </div>
    );
};
