import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logoutBlack from '../../images/logout_black';
import logout from '../../images/logout.png';
function SavedHeader(props) {
    const currentUser = React.useContext(CurrentUserContext)
    function toggleMenu() {
        const hamburgerButton = document.querySelector('.header__dropdown-mobile');
        const headerMain = document.querySelector('.header');
        const headerNav = document.querySelector('.header__nav');
        const headerImage = document.querySelector('.header__image');
        const headerText = document.querySelector('.header__text')

        hamburgerButton.classList.toggle('header__dropdown-mobile_active');
        if (hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.classList.add('header_menu-open')
            headerNav.classList.add('header__nav_menu-open');
            headerText.classList.add('header__text_saved_menu-open')
            headerImage.src = [logout];
        } if (!hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.classList.remove('header_menu-open')
            headerNav.classList.remove('header__nav_menu-open');
            headerText.classList.remove('header__text_saved_menu-open');
            headerImage.src={logoutBlack};
        }
    }
    function headerButtonClick(){
        props.buttonClick();
        toggleMenu()
    }
    return (
        <header className="header header_saved">
            <p ><a className="header__text header__text_saved" href="/">NewsExplorer</a></p>
            <button onClick={toggleMenu} className="header__dropdown-mobile header__dropdown-mobile_saved" />
            <div className="header__nav ">
                <NavLink className="header__nav-link header__nav-link_saved" to="/">Home</NavLink>
                <NavLink className="header__nav-link header__nav-link_saved" activeClassName="header__nav-link_saved_selected" to="/saved-news">Saved articles</NavLink>
                <button className=" button header__button header__button_saved" onClick={headerButtonClick}>
                    {currentUser.name}
                    <img className="header__image" src={logoutBlack} alt="logout" />
                </button>
            </div>
        </header>
    )
}
export default SavedHeader;
