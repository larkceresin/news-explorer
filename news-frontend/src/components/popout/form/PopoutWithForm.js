import React from 'react';

function PopoutWithForm(props) {
function isDisabled(){
    return (!props.valid);
        
}

    return <section className={`popout ${props.isOpen ? "popout_active" : ""}`} onClick={props.onClose} >
            <button className="popout__close-button" onClick={props.onClose}/>
            <form onSubmit={props.handleSubmit} className="form">
                <h2 className="form__title">{props.title}</h2>
                {props.children}
                <button className={`button form__button ${props.valid? '':'form__button_disabled'}`} type="submit" value={props.buttonText} disabled={isDisabled()}>{props.buttonText}</button>
                <p class="form__text">or <button class="form__link" onClick={props.linkClick}>{props.link}</button></p>
            </form>
    </section>

}

export default PopoutWithForm
