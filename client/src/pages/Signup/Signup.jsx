import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';

export const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleRegister = (registerData) => {
        dispatch(register(registerData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className={styles.signup}>
            <div className={styles['signup-container']}>
                <h2 className={styles['signup-header']}>Welcome!</h2>
                <AuthForm type="signup" onSubmit={handleRegister} />
            </div>
        </div>
    );
};
