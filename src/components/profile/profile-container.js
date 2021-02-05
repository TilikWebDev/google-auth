import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfileContainer = ({user}) => {
    return (
        (typeof user.accessToken !== 'undefined') ?
            <section>
                <img src={user.profileObj.imageUrl}/>
                <br></br>
                <br></br>
                {`${user.profileObj.familyName} ${user.profileObj.givenName}`}
            </section>
            :
            <Redirect to={'/login'}></Redirect>
    );
}

let mapStateToProps = (state) => {
	return {
        user: state.user
	};
}

export default connect(mapStateToProps)(ProfileContainer);