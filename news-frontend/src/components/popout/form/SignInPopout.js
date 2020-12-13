import React, {useState} from 'react';
import PopoutWithForm from './PopoutWithForm';
import Input from './Input';
function SignInPopout(props){
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [formValid, setFormValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    function handlePasswordChange(e){
        console.log(e)
        setIsPasswordValid(true)
        allValid()
    }
    function handleEmailChange(e){
        console.log(e)
        setIsEmailValid(true)
        allValid()
    }
    function allValid(){
        if (isEmailValid && isPasswordValid === true){
            setFormValid(true)
        }
        setFormValid(true)
    }
    return(
        <PopoutWithForm isOpen={props.isSignInOpen} buttonText="Sign in" onClose={props.onClose} title="Sign in" link="Sign up" linkClick={props.linkClick} handleSubmit={props.handleSubmit} valid={formValid}>
            <Input type="email" name="Email-SignIn" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email"/>
            <Input type="password" name="Password-SignIn" handleChange={handlePasswordChange} placeholderText="Enter password" valid={isPasswordValid}/>
            </PopoutWithForm>
    )
}
export default SignInPopout;
