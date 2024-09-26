import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import styles from './Login.module.css';
import { useFormInput } from "../../hooks/useFormInput";
import { Button } from "../../components/Button/Button";

export const Login = () => {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if(username.value === 'admin' && password.value === '1234') {
            dispatch(login());
            navigate('/');
        } else {
            setError('Incorrect username or password');
        }
    };

    return(
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
                    <Button>Login</Button>
                </form>
            </div>
        </div>
    )
}