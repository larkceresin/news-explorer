import React, { useEffect, useState } from 'react';
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
import { Route, Switch, useHistory } from 'react-router-dom';
import newsApi from '../utils/API/news-api';
import * as auth from '../utils/auth';
import PracticumBackend from '../utils/API/practicum-api';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isRegistrationCompleteOpen, setisRegistrationCompleteOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([])
  const [results, setResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [userToken, setUserToken] = useState('');
  const history = useHistory()

  const practicumBackend = new PracticumBackend({
    baseUrl: 'http://www.api.larkceresin.students.nomoreparties.site',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    }
  })

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      let token = localStorage.getItem('jwt')
      setUserToken(token)
      auth.checkToken(token)
        .then(res => {
          setCurrentUser(res)
          setLoggedIn(true)
        })
        .catch(err => console.log(err))
    }
  }, [userToken, savedCards])

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
  function signInSubmit({ email, password }) {
    console.log(password, email)
    auth.authorize(password, email)
      .then(res => {
        if (res.token) {
          setUserToken(res.token)
        }
      })
      .then(() => {
        auth.checkToken(userToken)
          .then(res => {
            setCurrentUser(res)
            setLoggedIn(true)
          })
      })
      .then(() => {
        setIsSignInOpen(false)
      })
      .catch(err => console.log(err))
  }
  function signUpSubmit({ email, password, name }) {
    console.log(email, password, name)
    auth.register(email, password, name)
      .then(res => {
        console.log(res)
      })
      .then(() => {
        setIsSignUpOpen(false);
        openSuccess();
      })
      .catch(err => console.log(err))

  }
  function logout() {
    setLoggedIn(false);
    setCurrentUser({})
    localStorage.removeItem('jwt');
    history.push('/')
  }
  function search(keyword) {
    setKeyword(keyword)
    setNoResults(false)
    setResults(false)
    setLoading(true)
    newsApi.getArticles(keyword)
      .then(res => { setCards(res.articles) })
      .then(() => {
        setLoading(false);
        if (cards.length === 0) {
          setNoResults(true)
        } else {
          setNoResults(false);
          setResults(true);
        }


      })
  }
  function saveCard( {title, text, date, source, link} ) {

    practicumBackend.saveArticle({ keyword: keyword, title, text, date, source, link })
    .then(res=>{return res})
  }
  function unlike(id) {
    practicumBackend.removeArticle(id)
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Switch>
        <Route exact path="/">
          <Main headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} search={search} />
          {results ? <NewsCardList onSaveClick={saveCard} removeSave={unlike} cards={cards} keyword={keyword} loggedIn={loggedIn} hoverText="Sign in to save articles" /> : ''}
          {noResults ? <NoResults /> : ''}
          {loading ? <Preloader /> : ''}
          <About />
        </Route>
        <ProtectedRoute path="/saved-news"
        loggedIn={loggedIn}
        component={SavedNews}
        headerClick={logout}
        onSaveClick={saveCard} 
        removeSave={unlike} 
        />


      </Switch>



      <Footer />
      <RegistrationComplete isOpen={isRegistrationCompleteOpen} linkClick={openSignIn} onClose={closeAll} />
      <SignInPopout isSignInOpen={isSignInOpen} onClose={closeAll} handleSubmit={signInSubmit} linkClick={openSignUp} />
      <SignUpPopout isSignUpOpen={isSignUpOpen} onClose={closeAll} handleSubmit={signUpSubmit} linkClick={openSignIn} />

    </CurrentUserContext.Provider>
  );
}

export default App;
