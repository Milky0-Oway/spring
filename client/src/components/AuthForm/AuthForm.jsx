import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../store/actions';
import styles from './AuthForm.module.css';
import { useFormInput } from '../../hooks/useFormInput';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Link } from 'react-router-dom';

export const AuthForm = ({ type, onSubmit }) => {
    const username = useFormInput('');
    const password = useFormInput('');
    const repeatPassword = useFormInput('');
    const firstName = useFormInput('');
    const lastName = useFormInput('');
    const age = useFormInput(0);
    const dispatch = useDispatch();

    const authError = useSelector((state) => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        const authData = {
            username: username.value,
            password: password.value,
            ...(type === 'signup' && { repeatPassword: repeatPassword.value }),
            ...(type === 'signup' && { firstName: firstName.value }),
            ...(type === 'signup' && { lastName: lastName.value }),
            ...(type === 'signup' && { age: age.value }),
        };
        onSubmit(authData);
    };

    useEffect(() => {
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit} className={styles['auth-form']}>
            <div className={styles['auth-item']}>
                <Input type="text" placeholder="Login" data={username} />
                {authError?.username && <p className={styles.error}>{authError.username}</p>}
            </div>
            <div className={styles['auth-item']}>
                <Input type="password" placeholder="Password" data={password} />
                {authError?.password && <p className={styles.error}>{authError.password}</p>}
            </div>
            {type === 'signup' && (
                <>
                    <div className={styles['auth-item']}>
                        <Input
                            type="password"
                            placeholder="Repeat password"
                            data={repeatPassword}
                        />
                        {authError?.repeatPassword && (
                            <p className={styles.error}>{authError.repeatPassword}</p>
                        )}
                    </div>
                    <div className={styles['auth-item']}>
                        <Input type="text" placeholder="First name" data={firstName} />
                        {authError?.firstName && (
                            <p className={styles.error}>{authError.firstName}</p>
                        )}
                    </div>
                    <div className={styles['auth-item']}>
                        <Input type="text" placeholder="Last name" data={lastName} />
                        {authError?.lastName && (
                            <p className={styles.error}>{authError.lastName}</p>
                        )}
                    </div>
                    <div className={styles['auth-item']}>
                        <Input type="number" placeholder="Age" data={age} />
                        {authError?.age && <p className={styles.error}>{authError.age}</p>}
                    </div>
                </>
            )}
            {type === 'signup' ? (
                <p className={styles.text}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            ) : (
                <p className={styles.text}>
                    Don&apos;t have an account? <Link to="/signup">Signup</Link>
                </p>
            )}
            <Button type="submit">{type === 'login' ? 'Login' : 'Signup'}</Button>
        </form>
    );
};
