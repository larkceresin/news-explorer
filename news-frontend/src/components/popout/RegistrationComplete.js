import React from 'react';

function RegistrationComplete(props){
    return(
        <section className={`popout ${props.isOpen ? "popout_active" : ""}`} onClick={props.onClose} >
        <button className="popout__close-button" onClick={props.onClose}/>
        <div className="popout__main">
            <h2 className="popout__text">Registration successfully completed</h2>
            <button onClick={props.linkClick} className="popout__link">Sign in</button>
        </div>
        </section>
    )
}
export default RegistrationComplete;