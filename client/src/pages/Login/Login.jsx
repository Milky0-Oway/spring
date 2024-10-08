import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleLogin = (loginData) => {
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
                <AuthForm type="login" onSubmit={handleLogin} />
            </div>
        </div>
    );
};
