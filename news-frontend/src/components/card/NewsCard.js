import React, { useState } from "react";
import PracticumBackend from '../../utils/API/practicum-api';

function NewsCard(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [cardId, setCardId] = useState('');
  const userToken = localStorage.getItem('jwt');

  const practicumBackend = new PracticumBackend({
    baseUrl: 'https://www.api.larkceresin.students.nomoreparties.site',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    }
  })

  function saveHover() {
    if (props.loggedIn) {
      return
    } setIsVisible(true)
  }

  function handleSaveClick(e) {
    if (props.loggedIn) {
      if (!e.target.classList.contains('card__save-button_saved')) {
        practicumBackend.saveArticle({
          keyword: props.keyword,
          title: props.title,
          text: props.text,
          date: props.date,
          source: props.source,
          link: props.image,
        })
          .then(res => {
            setCardId(res._id)
            e.target.classList.add('card__save-button_saved')
          })
      } if (e.target.classList.contains('card__save-button_saved')) {
        practicumBackend.removeArticle(cardId)
        .then(()=>{
          e.target.classList.remove('card__save-button_saved');
        })
        .catch(err=>console.log(err))

      }
    } return
  }

  function handleRemoveClick(e) {
    if (props.cardId) {
      setCardId(props.cardId)
      practicumBackend.removeArticle(props.cardId)
        .then(() => {
          props.onDelete(props.cardId)
        })
        .catch(err => console.log(err))
    }

  }

  function formatDate() {
    let articleDate = props.date;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let noTime = articleDate.slice(0, 10);
    let date = new Date(noTime);
    let formattedDate = `${months[date.getMonth()]} ${date.getDate()},  ${date.getFullYear()}`;
    return formattedDate
  }

  return (
    <li className="card">
      <button className={`button card__save-button ${props.savedArticles ? 'card__element_hidden' : ''}`} onMouseEnter={saveHover} onMouseLeave={() => setIsVisible(false)} onClick={handleSaveClick} />
      <button className={`button card__trash-button ${props.savedArticles ? '' : 'card__element_hidden'}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} onClick={handleRemoveClick} />
      <button className={`button card__keyword-button ${props.savedArticles ? '' : 'card__element_hidden'}`}>{props.keyword}</button>
      <button className={`card__hover-text ${isVisible ? '' : 'card__element_hidden'}`}>{props.hoverText}</button>
      <a href={props.link} target="_blank" rel="noreferrer" className='card__link'>
        <img className="card__image" src={props.image} alt={props.title} />

        <p className="card__date">{formatDate()}</p>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.text}</p>
        <p className="card__source-text card__source">{props.source}</p>
      </a>
    </li>
  )
}
export default NewsCard;


//keyword, title, text, date, source, link, image, owner