import React from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
function Main(props){
    return(
        <section className="main">
            <Header buttonClick={props.headerClick} loggedIn={props.loggedIn} />
        <section className="main__content">
            <h1 className="main__title">What's going on in the world?</h1>
            <p className="main__subtitle">Find the latest news on any topic and save them in your personal account.</p>
            <Search/>
        </section>
        </section>
    )
}
export default Main;
