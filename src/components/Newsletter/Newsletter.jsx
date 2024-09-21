import { Button } from '../Button/Button';
import './Newsletter.css';

export const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1 className="newsletter-header">Get the Spring newsletter</h1>
            <p className="newsletter-text">Stay connected with the Spring newsletter</p>
            <Button text={'Subscribe'} />
        </div>
    );
};
