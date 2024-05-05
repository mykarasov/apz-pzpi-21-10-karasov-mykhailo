import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className={"footer__container"}>
            <div className="footer__content">
                <div className={"footer__content-logo-container"}>
                    <p>TaskSync</p>
                </div>
                <div className={"footer__content-main-container"}>
                    <div className="footer__content-first-row">
                        <p>Про компанію</p>
                        <p>Сплата</p>
                        <p>Відгуки</p>
                        <p>Контакти</p>
                    </div>
                    <div className="footer__content-second-row">
                        <p>@2024 платформа "TaskSync"</p>
                    </div>
                </div>
                <div className={"footer__content-links-container"}>
                    <div className={"footer__content-link"}>
                        <img src={"Assets/footer-telegram-icon.png"} alt={"Error while loading image"}/>
                    </div>
                    <div className={"footer__content-link"}>
                        <img src={"Assets/footer-gmail-icon.png"} alt={"Error while loading image"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;