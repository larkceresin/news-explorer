import React from 'react';

function Search(){
    return(
        <div className="search">
        <input placeholder="Enter topic" className="search__input"/>
        <button className="search__button">Search</button>
        </div>
    )
}
export default Search;