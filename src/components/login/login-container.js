import React from 'react';
import { connect } from 'react-redux';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {googleOAuth2} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginContainer = ({googleOAuth2, user: {accessToken}}) => {
    return (
        (typeof accessToken === 'undefined') ?
            <section>
                {`Login with:  `} 

                <br></br>
                <br></br>
                
                <GoogleLogin
                    clientId="60999313874-mallo40c43lpdu070n5fbba5nlqjg3oa.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={googleOAuth2}
                    onFailure={googleOAuth2}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />
            </section>
            :
            <Redirect to={'/'}></Redirect>
    )
}

let mapStateToProps = (state) => {
	return {
        user: state.user
	};
}

export default connect(mapStateToProps, {googleOAuth2})(LoginContainer);
