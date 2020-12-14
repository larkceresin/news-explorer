import React from 'react';
function NewsCard(props) {
    return (
        <li className="card">
            <img className="card__image" src={props.image} alt={props.title} />
            <button className={`card__save-button ${props.savedArticles ? 'card__element_hidden' : ''}`} disabled={!props.loggedIn}/>
            <button className={`card__trash-button ${props.savedArticles ? '' : 'card__element_hidden'}`} />
            <button className={`card__keyword-button ${props.savedArticles ? '' : 'card__element_hidden'}`}>{props.keyword}</button>
            <button className={`card__sign-in-notice ${props.loggedIn? 'card__element_hidden':''}`}>Sign in to save articles</button>
            <p className="card__date">{props.date}</p>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__text">{props.text}</p>
            <p className="card__source-text"><a href={props.link} target="_blank" rel="noreferrer" className="card__source">{props.source}</a></p>
        </li>
    )
}
export default NewsCard;


//keyword, title, text, date, source, link, image, owner