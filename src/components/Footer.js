import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:delgadillofco@gmail.com" className="footer__link">delgadillofco@gmail.com</a>
            <ul className="social-list">

                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/delgadillofco" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"/></a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.facebook.com/francisco.delgadillo.9" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"/></a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/fcodelgadillo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
                </li>

            </ul>
        </footer>
    )
};

export default Footer;
