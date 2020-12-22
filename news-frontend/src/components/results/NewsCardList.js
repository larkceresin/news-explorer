import React, { useEffect, useState } from 'react';
import NewsCard from '../card/NewsCard';
function NewsCardList(props) {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [displayedCards, setDisplayedCards] = useState([]);
    const [count, setCount] = useState(3);

    useEffect(() => {
        if(props.savedArticles){
            setIsButtonVisible(false);
            setCount(props.cards.length);
        }
        else{
        setDisplayedCards(props.cards.slice(0, count));
        if (props.cards.length < count) {
            setIsButtonVisible(false)
        } else { setIsButtonVisible(true) }}
       
    }, [count])

    return (
        <section className="card__list">
            <h2 className={`card__list-title ${props.savedArticles ? 'card__element_hidden' : ''}`} >Search Results</h2>
            <ul className="card__container">
                {props.savedArticles ? props.cards.map((card, index) => {
                    return (<NewsCard
                        key={index}
                        keyword={card.keyword}
                        title={card.title}
                        text={card.text}
                        date={card.date}
                        source={card.source}
                        image={card.link}
                        savedArticles={props.savedArticles}
                        hoverText={props.hoverText}
                        loggedIn={props.loggedIn}
                        cardId={card._id}
                    />)
                }) : displayedCards.map((card, index) => {
                    return (<NewsCard
                        key={index}
                        keyword={props.keyword}
                        title={card.title}
                        text={card.description}
                        date={card.publishedAt}
                        source={card.source.name}
                        link={card.url}
                        image={card.urlToImage}
                        savedArticles={props.savedArticles}
                        hoverText={props.hoverText}
                        loggedIn={props.loggedIn}
                    />)
                })
                }
            </ul>
            <button className={`button card__list-button ${isButtonVisible ? '' : 'card__element_hidden'}`} onClick={() => setCount(count + 3)}>Show more</button>
        </section>
    )
}
export default NewsCardList;
