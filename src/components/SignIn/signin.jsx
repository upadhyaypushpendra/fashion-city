import React from "react";
import './signin.css';
import Authenticator from "../../Authenticator";

import GoogleBtn from "../GoogleBtn";

class SignInForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username : "",
            password : ""
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    handleLogin(){
        let result = Authenticator.authenticate(this.state.username,this.state.password);
        if(result.success){
            if(Authenticator.signIn(result.id).success){
                this.props.onSignIn(result.id);
            } else {
                alert("Unable to Sign in.");
            }
        } else {
            alert(result.message);
        }
    }
    render(){
        return (
            <div className={"form-container"}>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <div className="group">
                        <input className="form-input" value={this.state.username} name="username" onChange={this.handleInputChange} type="email" required={true}  autoComplete={"off"} />
                        <label className="form-input-label">Email</label>
                    </div>                    
                    <div className="group">
                        <input className="form-input" value={this.state.password} name="password" onChange={this.handleInputChange} type="password" required={true}  autoComplete="off" />
                        <label className="form-input-label">Password</label>
                    </div>
                    <div className="buttons">
                        <button className="custom-btn inverted" type="button" onClick={this.handleLogin} >SIGN IN</button>
                        <GoogleBtn onSignIn={this.props.onSignIn} onSignOut={this.props.onSignOut} isLoggedIn={this.props.isLoggedIn}/>
                    </div>
                </form>
            </div>
        );
    }
}

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayName : "",
            username : "",
            password : "",
            confirmPassword : ""            
        };
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value });
    }
    handleSignUp(ev){
        ev.preventDefault();
        let user = {};
        user['username'] = this.state.username;
        user['password'] = this.state.password;
        user['displayName'] = this.state.displayName;
        let confirmPassword = this.state.confirmPassword;
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
            this.props.onSignIn(result.id);
        } else {
            alert(result.message);
        }
    };
    render(){
        return (
            <div className={"form-container"}>
                <h2>I do not have a account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <div className="group">
                        <input className="form-input"value={this.state.displayName} onChange={this.handleInputChange} name="displayName" type="text" required={true}  autoComplete={"off"} />
                        <label className="form-input-label">Display Name</label>
                    </div>
                    <div className="group">
                        <input className="form-input" value={this.state.username} onChange={this.handleInputChange} name="username" type="email"  required={true}  autoComplete={"off"} ref={signUpEmail} />
                        <label className="form-input-label">Email</label>
                    </div>
                    <div className="group">
                        <input className="form-input" value={this.state.password} onChange={this.handleInputChange} name="password" type="password" required={true}  autoComplete={"off"} ref={signUpPassword} />
                        <label className="form-input-label">Password</label>
                    </div>
                    <div className="group">
                        <input className="form-input" value={this.state.confirmPassword} onChange={this.handleInputChange} name="confirmPassword" type="password" required={true}  autoComplete={"off"} ref={signUpConfirmPassword} />
                        <label className="form-input-label">Confirm Password</label>
                    </div>
                    <div className="buttons">
                        <button className="custom-btn inverted" type="submit" onClick={this.handleSignUp} >SIGN UP</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default function SignIn(props) {
    if(props.isLoggedIn) onSignIn();
    return (
        <div className={"signin-and-signup"}>
            <SignInForm {...props} />
            <span className={"vertical-divider"}></span>
            <SignUpForm {...props} />
        </div>
    );
}