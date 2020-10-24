import  React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '1000153637167-8v7la8d1p7taghvm4glioh1no4av8tg5.apps.googleusercontent.com';

class GoogleBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        };
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login (response) {
        this.props.onSignIn();
        console.log(response.profileObj.email);
        if(response.accessToken){
            this.setState(state => ({
                isLoggedIn: true,
                accessToken: response.accessToken
            }));
        }
    }

    logout (response) {
        this.props.onSignIn();
        this.setState(state => ({
            isLoggedIn: false
        }));
    }

    handleLoginFailure (response) {
        alert('Failed to log in')
    }

    handleLogoutFailure (response) {
        alert('Failed to log out')
    }

    render() {
        return (
            <div>
                { this.state.isLoggedIn ?
                    <GoogleLogout
                        clientId={ CLIENT_ID }
                        buttonText='Sign Out'
                        onLogoutSuccess={ this.logout }
                        onFailure={ this.handleLogoutFailure }
                    >
                    </GoogleLogout>
                    :
                    <GoogleLogin
                        clientId={ CLIENT_ID }
                        buttonText='Sign In with Google'
                        onSuccess={ this.login }
                        onFailure={ this.handleLoginFailure }
                        cookiePolicy={ 'single_host_origin' }
                        responseType='code,token'
                    />
                }

            </div>
        )
    }
}

export default GoogleBtn;