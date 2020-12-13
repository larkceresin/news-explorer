import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logoutBlack from '../../images/logout_black';
import logout from '../../images/logout.png';
function SavedHeader(props) {
    const currentUser = React.useContext(CurrentUserContext)
    function toggleMenu() {
        console.log('hi');
        const hamburgerButton = document.querySelector('.header__dropdown-mobile');
        const headerMain = document.querySelector('.header');
        const headerNav = document.querySelector('.header__nav');
        const headerText = document.querySelector('.header__text');
        const headerImage = document.querySelector('.header__image');

        hamburgerButton.classList.toggle('header__dropdown-mobile_active');
        if (hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.style.backgroundColor = "#000";
            headerText.style.color = '#fff'
            headerNav.style.display = "flex";
            headerImage.src = [logout];
        } if (!hamburgerButton.classList.contains('header__dropdown-mobile_active')) {
            headerMain.style.backgroundColor = null;
            headerText.style.color= null;
            headerNav.style.display = null;
        }
    }
    return (
        <header className="header header_saved">
            <p ><a className="header__text header__text_saved" href="/">NewsExplorer</a></p>
            <button onClick={toggleMenu} className="header__dropdown-mobile header__dropdown-mobile_saved" />
            <div className="header__nav ">
                <NavLink className="header__nav-link header__nav-link_saved" to="/">Home</NavLink>
                <NavLink className="header__nav-link header__nav-link_saved" activeClassName="header__nav-link_saved_selected" to="/saved-news">Saved articles</NavLink>
                <button className=" button header__button header__button_saved" onClick={props.buttonClick}>
                    {currentUser.name}
                    <img className="header__image" src={logoutBlack} alt="logout" />
                </button>
            </div>
        </header>
    )
}
export default SavedHeader;
