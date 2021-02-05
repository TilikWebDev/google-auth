import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';

import authReducer from './auth-reducer';

let reducers = combineReducers({
    user: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;