// Redux can have only one reducer, so we've to combine all the reducesr to single one called root reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tasks from './taskReducer';
import requests from './requestReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({ 
	tasks: tasks,
	requests: requests,
    routing: routerReducer,
    form: formReducer
})