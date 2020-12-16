import React from 'react';
import SavedHeader from '../header/SavedHeader';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import NewsCardList from '../results/NewsCardList';
function SavedNews(props){
    const currentUser = React.useContext(CurrentUserContext);
function getKeywords(){
    let keywords = []
    props.cards.forEach((card) =>{
        if (keywords.includes(card.keyword)){
            return}
        keywords.push(card.keyword + ' ')
//need functionality to list by order of quantity, and change to "and # others" in case of more than 3 types
    })
    return keywords
}
    return(
        <section className="saved">
            <SavedHeader buttonClick={props.headerClick}/>
            <p className="saved__title">Saved articles</p>
            <h1 className="saved__heading">{currentUser.name}, you have {props.cards.length} saved articles</h1>
            <p className="saved__text">By keywords: <span className="saved__keywords">{getKeywords()}</span></p>
            <NewsCardList cards={props.cards} savedArticles="true" loggedIn="true" hoverText="Remove from saved"/>
        </section>
    )
}
export default SavedNews;
