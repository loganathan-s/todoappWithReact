import React from 'react';
import PropTypes from 'prop-types';

class TaskForm extends React.Component{
	

	createTask(event){
		event.preventDefault();
		const task = {task: this.task.value, status: "New"}
		this.props.addTask(task);
		this.taskForm.reset();
	}	

	render(){
		return(
			 <form ref={(input) => this.taskForm = input} className="taskForm"  onSubmit={this.createTask.bind(this)}>
			  <input ref={(input) => this.task = input } type="text" placeholder="Task" />
			  <button type="submit" className="createTask">Add Task</button> 
			 </form>
			)
	}

}


TaskForm.PropTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;

