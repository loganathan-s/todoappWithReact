// 
//Reducer Accept teh belwo parameters and updates the state
//1. action (info about what happened)
//2. Copy of current state
// Each state should have individual reducer
//
import Request from '../lib/ExternalRequest';
import {BACKEND, formatArrayOfHash} from '../helpers';
 
function tasks(state = [], action){
	switch (action.type) {
		case 'GET_TODO_DATA':
			return action.payload;
		default:
		 return state     
	}
}

export default tasks;