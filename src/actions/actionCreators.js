//ACTION CREATORS 
// SHould have two 1. ACtion Type &, 2. PayLoad
// Actions are like event listeners, it calls every time.
import {BACKEND, formatArrayOfHash} from '../helpers';
import DataService from '../lib/DataService';

export function setTaskEditable(taskId){
	return { type: "SET_EDIT_FLAG", taskId }
}

// Aync Calls
//
export function requestLoading() {
  return { type: "REQUEST_LOADING", isLoading: true }
}

export function requestError(errorMessage = "RequestError") {
  return { type: "REQUEST_ERROR", isError: true, errorMessage  }
}

export function requestSuccess() {
  return { type: "REQUEST_SUCCESS", isError: false , isLoading: false }
}

export function fetchAllTasksSuccess(tasks) {
  return { type: "FETCH_ALL_TASKS_SUCCESS", payload: tasks }
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

// Aync Calls
//
export function ayncTaskAdd(task) {
  return dispatch => {
      dispatch(requestLoading());
  	  DataService.addTask(task).then(response => {
        dispatch(requestSuccess());
        if(typeof response !='object'){
          dispatch(requestError(response));
          return
        }
        dispatch(addTask(response))
      }).catch(err => {
        alert(err)
        dispatch(requestError(err));
    });
  };
}

export function ayncTaskUpdate(task) {
  return dispatch => {
      dispatch(requestLoading());
  	  DataService.updateTask(task).then(response => {
        dispatch(requestSuccess());
        if(typeof response !='object'){
          dispatch(requestError(response));
          return
        }
        dispatch(updateTask(response)) 
      }).catch(err => {
        dispatch(requestError());
    });
  };
}

export function ayncTaskDelete(task) {
  return dispatch => {
      dispatch(requestLoading());
      let taskId = task.id
  	  DataService.removeTask(taskId).then(response => {
        dispatch(requestSuccess());
        if(response != task.id){
          dispatch(requestError(response));
          return
        }
        dispatch(removeTask(task));
      }).catch(err => {
        dispatch(requestError(err));
    });
  };
}

export function ayncTaskList() {
  return dispatch => {
      dispatch(requestLoading());
      DataService.getTasks().then(tasks => {
        dispatch(requestSuccess());
        if(typeof tasks !='object'){
          dispatch(requestError(tasks));
          return
        }
        dispatch(fetchAllTasksSuccess(tasks));
    }).catch(err => {
       dispatch(requestSuccess());
       dispatch(requestError());
    });
  };
}
