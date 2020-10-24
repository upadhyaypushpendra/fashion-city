import React from "react";
import './signin.css';
import Authenticator from "../../Authenticator";

import GoogleBtn from "../GoogleBtn";
export default function SignIn({isLoggedIn,onSignIn,onSignOut}) {
    let signInEmail= React.useRef(null);
    let signInPassword = React.useRef(null);
    let signUpEmail= React.useRef(null);
    let signUpPassword = React.useRef(null);
    let signUpConfirmPassword= React.useRef(null);
    let signUpDisplayName = React.useRef(null);

    if(isLoggedIn) onSignIn();

    const handleLogin = ()=>{
        let result = Authenticator.authenticate(signInEmail.current.value,signInPassword.current.value);
        if(result.success){
            if(Authenticator.signIn(result.id).success){
                onSignIn(result.id);
            } else {
                alert("Unable to Sign in.");
            }
        } else {
            alert(result.message);
        }
    };
    const handleSignUp=(ev)=>{
        ev.preventDefault();
        let user = {};
        user['username'] = signUpEmail.current.value;
        user['password'] = signUpPassword.current.value;
        user['displayName'] = signUpDisplayName.current.value;
        let confirmPassword = signUpConfirmPassword.current.value;
        if(user.password.length === 0 || user.username.length === 0 || user.password.length === 0 || user.displayName.length===0) {
            alert("All fields are necessary.");
            return;
        }
        if(user.password !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }
        let result = Authenticator.signUp(user);
        if(result.success){
            alert("Account created.")
            onSignIn(result.id);
        } else {
            alert(result.message);
        }


    };
    return (
        <div className={"signin-and-signup"}>
            <div className={"form-container"}>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <div className="group">
                        <input className="form-input" name="email" type="email" required={true}  autoComplete={"off"} ref={signInEmail} />
                        <label className="form-input-label">Email</label>
                    </div>                    <div className="group">
                        <input className="form-input" name="password" type="password" required={true}  autoComplete="off" ref={signInPassword} />
                        <label className="form-input-label">Password</label>
                    </div>
                    <div className="buttons">
                        <button className="custom-btn inverted" type="button" onClick={handleLogin} >SIGN IN</button>
                        <GoogleBtn onSignIn={onSignIn} onSignOut={onSignOut} isLoggedIn={isLoggedIn}/>
                    </div>
                </form>
            </div>
            <span className={"vertical-divider"}></span>
            <div className={"form-container"}>
                <h2>I do not have a account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <div className="group">
                        <input className="form-input" name="display-name" type="text" required={true}  autoComplete={"off"} ref={signUpDisplayName} />
                        <label className="form-input-label">Display Name</label>
                    </div>
                    <div className="group">
                        <input className="form-input" name="email" type="email" required={true}  autoComplete={"off"} ref={signUpEmail} />
                        <label className="form-input-label">Email</label>
                    </div>
                    <div className="group">
                        <input className="form-input" name="password" type="password" required={true}  autoComplete={"off"} ref={signUpPassword} />
                        <label className="form-input-label">Password</label>
                    </div>
                    <div className="group">
                        <input className="form-input" name="confirm-password" type="password" required={true}  autoComplete={"off"} ref={signUpConfirmPassword} />
                        <label className="form-input-label">Confirm Password</label>
                    </div>
                    <div className="buttons">
                        <button className="custom-btn inverted" type="submit"  onClick={handleSignUp} onSubmit={handleSignUp} >SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
    );
}