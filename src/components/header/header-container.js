import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from './header.module.css';

const HeaderContainer = ({user: {accessToken}}) => {
    return (
        <div className={s.main}>
            <NavLink to={'/'}>Header</NavLink>

            {
                (typeof accessToken === 'undefined') ?
                        <NavLink to={'/login'}>Login</NavLink>
                    : 
                        <NavLink to={'/profile'}>Profile</NavLink>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
	return {
        user: state.user
	};
}

export default connect(mapStateToProps, {
    
})(HeaderContainer);