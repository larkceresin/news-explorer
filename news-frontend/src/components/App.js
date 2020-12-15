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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isRegistrationCompleteOpen, setisRegistrationCompleteOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const [cards, setCards] = useState([{
    keyword: "Nature",
    title: "Mountains",
    text: "Did you see as the world fell down, and how we are surrounded by nature and what happens in there. Have you seen the cats? Have you seen the trees? Have you ever watched the sun rise over the hill?",
    date: "November 12, 2020",
    source: "Misaka",
    link: "www.home.com",
    image: "https://images.all-free-download.com/images/graphicthumb/beautiful_natural_scenery_04_hd_pictures_166229.jpg"
  },
  {
    keyword: "Animals",
    title: "Baby Panda",
    text: "Tai Shan, whose name means Peaceful Mountain, was the first giant panda born at the Smithsonian's National Zoo in Washington, D.C., to survive infancy. Now 15 years old, Tai Shan lives at the China Conservation and Research Center for the Giant Panda.",
    date: "December 12, 2020",
    source: "National Geographic",
    link: "https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/",
    image: "https://tinyjpg.com/images/social/website.jpg"
  },
  {
    keyword: "Medicine",
    title: "Covid-19 Vaccine",
    text: "High-ranking White House officials are set to receive some of the first coronavirus vaccines in the United States, according to a White House official and a person familiar. Those vaccinations, which could begin as soon as this week, would come while the vaccine is in extremely limited supply and only generally available to high-risk health care workers.The New York Times first reported on the White House vaccinations.",
    date: "December 13, 2020",
    source: "CNN",
    link: "https://www.cnn.com/2020/12/13/politics/white-house-coronavirus-vaccine/index.html",
    image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg"
  }
]);
const history = useHistory()

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
    setCurrentUser({ name: 'UserName' })
  }
  function signUpSubmit(e) {
    e.preventDefault();
    setIsSignUpOpen(false);
    openSuccess();

  }
  function logout() {
    setLoggedIn(false);
    setCurrentUser({})
    history.push('/')
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} />
            {/* <NewsCardList cards={cards} loggedIn={loggedIn} hoverText="Sign in to save articles"/> 
              <NoResults/> 
              <Preloader/> */}
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
