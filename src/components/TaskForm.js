import React from 'react';

class TaskForm extends React.Component{
	
	createTask(event){
		event.preventDefault();
		const task = {task: this.task.value}
		this.props.addTask(task);
		this.taskForm.reset();
	}


	render(){
		return(
			 <form ref={(input) => this.taskForm = input} className="taskForm"  onSubmit={this.createTask.bind(this)}>
			  <input ref={(input) => this.task = input } type="text" placeholder="Task"/>
			  <button type="submit">+ Add Task</button> 
			 </form>
			)
	}

}

export default TaskForm;

