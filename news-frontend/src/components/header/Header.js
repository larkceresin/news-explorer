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
            headerMain.classList.add('header_menu-open')
            headerNav.classList.add('header__nav_menu-open');

        } if (!hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.classList.remove('header_menu-open')
            headerNav.classList.remove('header__nav_menu-open');
        }
    }
    function headerButtonClick(){
        props.buttonClick();
        toggleMenu()
    }
    return (
        <header className="header">
            <p ><a href="/" className="header__text" > NewsExplorer</a></p>
            <button onClick={toggleMenu} className="header__dropdown-mobile " />
            <div className="header__nav">
                <NavLink className="header__nav-link" activeClassName="header__nav-link_selected" to="/">Home</NavLink>
                <NavLink className={`header__nav-link ${props.loggedIn ? '' : 'header__nav-link_hidden'}`} to="/saved-news">Saved articles</NavLink>
                <button className="button header__button" onClick={headerButtonClick}>
                    {props.loggedIn ? `${currentUser.name}` : 'Sign in'}
                    <img className={props.loggedIn ? `header__image` : 'header__image header__image_hidden'} src={logout} alt="logout" />
                </button>
            </div>
        </header>
    )
}
export default Header;
