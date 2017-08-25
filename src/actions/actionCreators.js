//ACTION CREATORS 
// SHould have two 1. ACtion Type &, 2. PayLoad
// Actions are like event listeners, it calls every time.
import {BACKEND, formatArrayOfHash} from '../helpers';
import DataService from '../lib/DataService';

export function setTaskEditable(taskId){
	return { type: "SET_EDIT_FLAG", taskId }
}

// Add Todo
export function addTask(task){
	return { type: "ADD_TASK", task }
}

//Remove Todo
export function removeTask(task){
	return { type: "REMOVE_TASK", task }
}

//Update Todo
export function updateTask(task){
	return { type: "UPDATE_TASK", task }
}

export function ayncTaskAdd(task) {
  return dispatch => {
  	  DataService.addTask(task).then(response => {return dispatch(addTask(response))});
  };
}

export function ayncTaskUpdate(task) {
  return dispatch => {
  	  DataService.updateTask(task).then(response => {return dispatch(updateTask(response))});
  };
}

export function ayncTaskDelete(task) {
  return dispatch => {
  	  let taskId = task.id
  	  DataService.removeTask(taskId).then(response => {return dispatch(removeTask(task))});
  };
}