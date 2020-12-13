import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logout from '../../images/logout.png';
function Header(props) {
    const currentUser = React.useContext(CurrentUserContext)
    function toggleMenu() {
        const hamburgerButton = document.querySelector('.header__dropdown-mobile');
        const headerMain = document.querySelector('.header');
        const headerNav = document.querySelector('.header__nav');

        hamburgerButton.classList.toggle('header__dropdown-mobile_active');
        if (hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.style.backgroundColor = "#000";
            headerNav.style.display = "flex";
        } if (!hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.style.backgroundColor = null;
            headerNav.style.display = null;
        }
    }
    return (
        <header className="header">
            <p className="header__text">NewsExplorer</p>
            <button onClick={toggleMenu} className="header__dropdown-mobile " />
            <div className="header__nav">
                <NavLink className="header__nav-link" activeClassName="header__nav-link_selected" to="/">Home</NavLink>
                <NavLink className={`header__nav-link ${props.loggedIn ? '' : 'header__nav-link_hidden'}`} to="/saved">Saved articles</NavLink>
                <button className="header__button button" onClick={props.buttonClick}>
                    {props.loggedIn ? `${currentUser.name}` : 'Sign in'}
                    <img className={props.loggedIn ? `header__image` : 'header__image header__image_hidden'} src={logout} alt="logout" />
                </button>
            </div>
        </header>
    )
}
export default Header;
