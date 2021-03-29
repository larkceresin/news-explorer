import React, { useEffect, useState } from 'react';
import SavedHeader from '../header/SavedHeader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NewsCardList from '../results/NewsCardList';
import PracticumBackend from '../../utils/API/practicum-api';

function SavedNews(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const userToken = localStorage.getItem('jwt');
    const [savedCards, setSavedCards] = useState([])
    const savedLength = savedCards.length
    const practicumBackend = new PracticumBackend({
        baseUrl: 'https://localHost:3000',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
        }
    })
    useEffect(() => {
        practicumBackend.getSavedArticles()
            .then(res => {
                setSavedCards(res.articles)
            })
            .catch(err => console.log(err))

    }, [])


    function getKeywords() {
        let keywords = []
        savedCards.forEach(card => {
            keywords.push(card.keyword)
        })

        function sortByOccurance(arr) {
            let frequency = {}

            arr.forEach(value => { frequency[value] = 0 })
            var uniques = arr.filter((value) => {
                return ++frequency[value] === 1
            })
            return uniques.sort((a, b) => {
                return frequency[b] - frequency[a];
            })
        };
        const keywordsList = sortByOccurance(keywords)
        const keywordsDisplay = keywordsList.join(", ")
        if (keywordsList.length <= 3) {
            return keywordsDisplay
        }
        const keywordCut = keywordsList.slice(0, 2)
        const display = keywordCut.join(", ") + `, and ${keywordsList.length - 2} others`
        return display
    }
    function handleChange(cardID) {
        const newCards = savedCards.filter((c) =>  c._id !== cardID );
        setSavedCards(newCards)

    }

    return (
        <section className="saved">
            <SavedHeader buttonClick={props.headerClick} />
            <p className="saved__title">Saved articles</p>
            <h1 className="saved__heading">{currentUser.name}, you have {savedLength} saved articles</h1>
            <p className="saved__text">By keywords: <span className="saved__keywords">{getKeywords()}</span></p>
            <NewsCardList
                onChange={handleChange}
                cards={savedCards}
                loggedIn="true"
                savedArticles="true"
                hoverText="Remove from saved" />
        </section>
    )
}
export default SavedNews;
