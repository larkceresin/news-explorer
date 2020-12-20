import React, {useState} from 'react';

function Search(props){
    const [keyword, setKeyword]= useState('')
    function onSearchChange(e){
            setKeyword(e.target.value)
    }
    function submission(e){
        e.preventDefault()
        props.onSubmit(keyword)
    }
    return(
        <form  onSubmit={submission} className="search">
        <input placeholder="Enter topic" className="search__input" onChange={onSearchChange}/>
        <button className="button search__button">Search</button>
        </form>
    )
}
export default Search;