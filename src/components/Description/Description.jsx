import { Button } from '../Button/Button';
import './Description.css';

export const Description = () => {
    return (
        <section className="description">
            <h1 className="description-header">Projects</h1>
            <p className="description-text">
                From configuration to security, web apps to big data—whatever the infrastructure
                needs of your application may be, there is a Spring Project to help you build it.
                Start small and use just what you need—Spring is modular by design.
            </p>
            <Button>Release calendar</Button>
        </section>
    );
};
