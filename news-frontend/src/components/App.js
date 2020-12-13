import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import About from './about/About';
import Footer from './footer/Footer';
import Main from './main/Main';
import RegistrationComplete from './popout/RegistrationComplete';
import SignInPopout from './popout/form/SignInPopout';
import SignUpPopout from './popout/form/SignUpPopout';
import NewsCardList from './results/NewsCardList';
import Preloader from './results/Preloader';
import NoResults from './results/NoResults';
import SavedNews from './saved/SavedNews';
import { Route, Switch } from 'react-router-dom';
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isRegistrationCompleteOpen, setisRegistrationCompleteOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const cards = [];

  function openSignIn() {
    setIsSignUpOpen(false);
    setisRegistrationCompleteOpen(false);
    setIsSignInOpen(true);
  }
  function openSignUp() {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  }
  function openSuccess() {
    setisRegistrationCompleteOpen(true);
  }
  function closeAll(e) {
    if (e.target !== e.currentTarget) return
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setisRegistrationCompleteOpen(false);
  }
  window.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
      setIsSignInOpen(false);
      setIsSignUpOpen(false);
      setisRegistrationCompleteOpen(false);
    } return
  })
  function signInSubmit(e) {
    e.preventDefault();
    setLoggedIn(true);
    setIsSignInOpen(false);
  }
  function signUpSubmit(e) {
    e.preventDefault();
    setIsSignUpOpen(false);
    openSuccess();

  }
  function logout() {
    setLoggedIn(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} />
          <About />
        </Route>
        <Route path='/saved-news'>
          <SavedNews cards={cards} headerClick={logout} />

        </Route>


      </Switch>



      <Footer />
      <RegistrationComplete isOpen={isRegistrationCompleteOpen} linkClick={openSignIn} onClose={closeAll} />
      <SignInPopout isSignInOpen={isSignInOpen} onClose={closeAll} handleSubmit={signInSubmit} linkClick={openSignUp} />
      <SignUpPopout isSignUpOpen={isSignUpOpen} onClose={closeAll} handleSubmit={signUpSubmit} linkClick={openSignIn} />
    </CurrentUserContext.Provider>
  );
}

export default App;
