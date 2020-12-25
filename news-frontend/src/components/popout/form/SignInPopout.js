import React, { useState } from 'react';
import PopoutWithForm from './PopoutWithForm';
import Input from './Input';
function SignInPopout(props) {
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [email, setEmail] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false);

    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
        setIsEmailValid(validateEmail(email))
        allValid(e)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
        if (password.length > 7) {
            setIsPasswordValid(true)
        }
        allValid(e)
    }
   
    function allValid(e) {
        setFormValid(e.target.closest('form').checkValidity())
    }
    function handleSignInSubmit(e){
        e.preventDefault()
        props.handleSubmit({email, password})
    }
    return (
        <PopoutWithForm isOpen={props.isSignInOpen} buttonText="Sign in" onClose={props.onClose} title="Sign in" link="Sign up" linkClick={props.linkClick} handleSubmit={handleSignInSubmit} valid={formValid}>
            <Input type="email" name="Email" form="sign-in" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />
            <Input type="password" name="Password" form="sign-in" handleChange={handlePasswordChange} placeholderText="Enter password" valid={isPasswordValid} />
        </PopoutWithForm>
    )
}
export default SignInPopout;
