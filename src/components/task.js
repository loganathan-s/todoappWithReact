import React from 'react';
import EditTaskForm from './EditTaskForm';
import PropTypes from 'prop-types';

class Task extends React.Component{
	render(){
			const { task,  index } = this.props; // Es6 Destructuring
			const markcompleteText = (task.status === "Done") ? "Mark InProgress" : "Mark Complete" 
			
		return(
			 <li className="task">
			  <h3 className="taskName">
			  	{task.task} - {task.status}
			  </h3>
			  { (task.edit) ? <EditTaskForm task={task} index={index} setCurrentTaskEditable={this.props.setCurrentTaskEditable} updateTask={this.props.updateTask}/> : <div><button onClick={() => this.props.markasDone(index)} className="markcomplete">{markcompleteText}</button><button onClick={() => this.props.setCurrentTaskEditable(index)} className="editTask">Edit Task</button><button onClick={() => this.props.removefromTask(task)} className="removeTask">RemoveTask</button></div>		 }
			 </li>
			)
	}

}

Task.PropTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  setCurrentTaskEditable: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
