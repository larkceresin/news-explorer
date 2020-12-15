import React, {useState} from "react";

function NewsCard(props) {
    const [isVisible, setIsVisible] = useState(false);
    function saveHover(){
        if(props.loggedIn){
            return
        } setIsVisible(true)
    }
    function handleSaveClick(e){
        if(props.loggedIn){
        e.target.classList.toggle('card__save-button_saved')
    } return
    }
    return (
        <li className="card">
            <img className="card__image" src={props.image} alt={props.title} />
            <button className={`card__save-button ${props.savedArticles ? 'card__element_hidden' : ''}`} onMouseEnter={saveHover} onMouseLeave={()=>setIsVisible(false)} onClick={handleSaveClick}/>
            <button className={`card__trash-button ${props.savedArticles ? '' : 'card__element_hidden'}`} onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)} />
            <button className={`card__keyword-button ${props.savedArticles ? '' : 'card__element_hidden'}`}>{props.keyword}</button>
            <button className={`card__hover-text ${isVisible? '':'card__element_hidden'}`}>{props.hoverText}</button>
            <p className="card__date">{props.date}</p>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__text">{props.text}</p>
            <p className="card__source-text"><a href={props.link} target="_blank" rel="noreferrer" className="card__source">{props.source}</a></p>
        </li>
    )
}
export default NewsCard;


//keyword, title, text, date, source, link, image, owner