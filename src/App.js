import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/entry-point';
import Index from './components/index/entry-point';
import Login from './components/login/entry-point';
import Profile from './components/profile/entry-point';

const App = (props) => {
    return (
        <div id="wrapper">
            <Header/>

            <div id="main">
                <Route exact path={'/'} render={ () => <Index/> } />
                <Route exact path={'/login'} render={ () => <Login/> } />
                <Route exact path={'/profile'} render={ () => <Profile/> } />
            </div>
        </div>
    );
}

export default App;