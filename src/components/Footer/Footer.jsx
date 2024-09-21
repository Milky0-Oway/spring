import './Footer.css';
import { Links } from '../Links/Links';
import { Newsletter } from '../Newsletter/Newsletter';
import springLogo from '../../images/spring-logo.png';
import youtube from '../../images/youtube.svg';
import github from '../../images/github.svg';
import x from '../../images/x.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Links />
                <Newsletter />
            </div>
            <div className="social-media-container">
                <img src={springLogo} alt="Logo" />
                <div className="social-media">
                    <img src={youtube} alt="Youtube Logo" className="social-media-img" />
                    <img src={github} alt="Github Logo" className="social-media-img" />
                    <img src={x} alt="X Logo" className="social-media-img" />
                </div>
            </div>
            <p className="footer-text-primary">
                Copyright © 2005 - 2024 Broadcom. All Rights Reserved. The term
                &quot;Broadcom&quot; refers to Broadcom Inc. and/or its subsidiaries.
            </p>
            <div className="footer-links">
                <a href="#" className="footer-link">
                    Terms of Use
                </a>
                •
                <a href="#" className="footer-link">
                    Privacy
                </a>
                •
                <a href="#" className="footer-link">
                    Trademark Guidelines
                </a>
                •
                <a href="#" className="footer-link">
                    Your California Privacy Rights
                </a>
            </div>
            <p className="footer-text-secondary">
                Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™
                are trademarks or registered trademarks of the Apache Software Foundation in the
                United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™
                are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered
                trademark of the Linux Foundation in the United States and other countries. Linux®
                is the registered trademark of Linus Torvalds in the United States and other
                countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft
                Corporation. &quot;AWS&quot; and &quot;Amazon Web Services&quot; are trademarks or
                registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and
                copyrights are property of their respective owners and are only mentioned for
                informative purposes. Other names may be trademarks of their respective owners.
            </p>
        </footer>
    );
};
