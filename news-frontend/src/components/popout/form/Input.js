import React from 'react';
function Input(props){
    return(
        <>
        <label htmlFor={props.name} className="form__input-title">{props.name}</label>
        <input required id={props.name+'-'+props.form}
        className="form__input"
        type={props.type}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholderText}
        />
        <span id={`${props.name}-error`}
        className={`form__input-error ${props.valid? "":"form__input-error_visible"}`}
        >{props.errorText}</span>
        </>
    )
}
export default Input;
