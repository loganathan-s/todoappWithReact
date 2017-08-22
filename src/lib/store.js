import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { rootReducer } from '../reducers/index';
import { Router, Route, browserHistory } from 'react-router'



const defaultState = {
	tasks: {},
	editing: false,
    currentTask: {}
}


const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;