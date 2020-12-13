import React from 'react';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';


function Footer() {

    return (
        <footer className="footer">
            <p className="footer__copywright">© 2020 Supersite, Powered by News API</p>
            <div className="footer__content-container">
            <ul className="footer__content footer__content_links">
                <li className="footer__item"><a className="footer__link" href="#top">Home</a></li>
                <li className="footer__item"><a className="footer__link" href="https://practicum.yandex.com/">Practicum by Yandex</a></li>
            </ul>
            <ul class="footer__content footer__content_icons">
                <li><a  href="https://github.com/larkceresin"><img src={github} alt="github" class=" footer__icon"/></a></li>
                <li><a href="https://www.facebook.com/shamanlvr/"><img src={facebook} alt="facebook" class="footer__icon "/></a></li>
            </ul>
            </div>
        </footer>
    )
}
export default Footer;
