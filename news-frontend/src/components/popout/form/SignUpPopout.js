import React, { useState } from 'react';
import PopoutWithForm from './PopoutWithForm';
import Input from './Input';


function SignUpPopout(props) {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [email, setEmail] = useState('');
    const [isUserValid, setIsUserValid] = useState(true);
    const [user, setUser] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(true);

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
        if (password.length > 6) {
            setIsPasswordValid(true)
        } else {
            setIsPasswordValid(false)
        }
        allValid(e)
    }
    function handleUserChange(e) {
        setUser(e.target.value)
        setIsUserValid(true)

        allValid(e)
    }
    function allValid(e) {
        setFormValid(e.target.closest('form').checkValidity())
    }
    function signUpSubmit(e) {
        e.preventDefault();
        props.handleSubmit({email, password, name: user})
    }
    return (
        <PopoutWithForm isOpen={props.isSignUpOpen} buttonText="Sign up" onClose={props.onClose} title="Sign up" link="Sign in" linkClick={props.linkClick} handleSubmit={signUpSubmit} valid={formValid}>
            <Input type="email" name="Email" form="sign-up" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />
            <Input type="password" name="Password" form="sign-up" handleChange={handlePasswordChange} placeholderText="Enter password" errorText="Password requires additional characters" valid={isPasswordValid} />
            <Input type="text" name="Username" form="sign-up" handleChange={handleUserChange} errorText="This username is not available" valid={isUserValid} placeholderText="Enter your username" />
        </PopoutWithForm>
    )
}
export default SignUpPopout;
