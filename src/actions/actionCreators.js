//ACTION CREATORS 
// SHould have two 1. ACtion Type &, 2. PayLoad
// Actions are like event listeners, it calls every time.

export function listTasks(){
	return {
		type: "FETCH_TASKS"
	}
}


// Add Todo
export function addTask(task){
	return {
		type: "ADD_TASK",
		task
	}
}

//Remove Todo
export function removeTask(taskId){
	return {
		type: "REMOVE_TASK",
		taskId
	}
}

//Update Todo
export function updateTask(taskId, task){
	return {
		type: "UPDATE_TASK",
		taskId,
		task
	}
}