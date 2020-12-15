import React from 'react';
import NewsCard from '../card/NewsCard';
function NewsCardList(props){
return(
    <section className="card__list">
        <h2 className={`card__list-title ${props.savedArticles? 'card__element_hidden':''}`} >Search Results</h2>
        <ul className="card__container">
            {props.cards.map((card, index)=>{
                return(<NewsCard
                key={index}
                keyword={card.keyword}
                title={card.title}
                text={card.text}
                date={card.date}
                source={card.source}
                link={card.link}
                image={card.image}
                savedArticles={props.savedArticles}
                hoverText={props.hoverText}
                loggedIn={props.loggedIn}
                />)
            })}
        </ul>
       <button className={`button card__list-button ${props.savedArticles? 'card__element_hidden':'' }`}>Show more</button>
    </section>
)
}
export default NewsCardList;
