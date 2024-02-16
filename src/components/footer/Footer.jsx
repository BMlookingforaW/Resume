import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Resume</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href='https://www.linkedin.com/in/bharat-m-b6b3b3121/' className='footer__social-link' target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href='https://github.com/BMlookingforaW' className='footer__social-link' target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href='https://twitter.com/bharatmiishra' className='footer__social-link' target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a href='https://www.instagram.com/_bharat_mishra_/' className='footer__social-link' target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy"></span>
            </div>
        </footer>
    )
}

export default Footer