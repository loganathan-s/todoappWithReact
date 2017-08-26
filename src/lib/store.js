import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { rootReducer } from '../reducers/index';
import { Router, Route, browserHistory } from 'react-router'

const defaultState = {
	tasks: {},
	requests: { isError: false, isLoading: false, errorMessage: false },
}


const store = createStore(rootReducer, defaultState, compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;