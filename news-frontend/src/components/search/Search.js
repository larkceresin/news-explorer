import React, { useState } from 'react';

function Search(props) {
    const [keyword, setKeyword] = useState('');
    const [keywordValid, setKeywordValid] = useState(true);
    const searchField = document.querySelector('.search__input');

    function onSearchChange(e) {
        setKeyword(e.target.value)
        if (keyword !== '') {
            setKeywordValid(true)
            document.querySelector('.search__button').disabled = false
        }

    }
    function disableSearch() {
        searchField.style.pointerEvents = 'none';
        searchField.disabled = true
    }
    function enableSearch() {
        searchField.style.pointerEvents = 'auto';
        searchField.disabled = false;
    }
    function submission(e) {
        e.preventDefault()
        disableSearch()
        if (!keyword) {
            enableSearch()
            return
        }
         props.onSubmit(keyword);
         setTimeout(enableSearch, 1000)
         
    }
    return (
        <form onSubmit={submission} className="search">
            <input placeholder="Enter topic" className="search__input" onChange={onSearchChange} onFocus={()=>setKeywordValid(false)}/>
            <span id={`${props.name}-error`}
                className={`form__input-error ${keywordValid ? "" : "form__input-error_visible"}`}
            >Please enter a keyword</span>
            <button className={`button search__button ${keywordValid ? "" : "search__button_disabled"}`} disabled>Search</button>
        </form>
    )
}
export default Search;