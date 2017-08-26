// 
//Reducer Accept teh belwo parameters and updates the state
//1. action (info about what happened)
//2. Copy of current state
// Each state should have individual reducer
// State should be changed only in reducer, all states should be changed immutably
import Request from '../lib/ExternalRequest';
import {BACKEND, formatArrayOfHash} from '../helpers';
 
function tasks(state = [], action){
	switch (action.type) {
		case 'FETCH_ALL_TASKS_SUCCESS':
			return action.payload;
		case 'ADD_TASK':	 
			return {...state, [`task${action.task.id}`]: action.task }
		case 'UPDATE_TASK':
		   console.log(state);
		    return {...state, [`task${action.task.id}`]: action.task }
		case 'SET_EDIT_FLAG':
			const currentTask = {...state[action.taskId]}
    		currentTask["edit"] = !currentTask["edit"];
			return {...state, [`task${currentTask.id}`]: currentTask }
		case 'REMOVE_TASK':
			//const taskId = `task${action.task.id}`
			//{ [taskId]: discard, ...newState } = state;
			//return newState
	 
			let allTasks = Object.keys(state).filter(key => key != `task${action.task['id']}`)
			const validState = allTasks.reduce((newState, key) => {
				newState[key] = {...state[key]}
				return newState
			}, {})
			return validState;
		default:
			 return state
	}
}

export default tasks;