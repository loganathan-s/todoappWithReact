import React from 'react';

class Task extends React.Component{
	render(){
			const { task,  index } = this.props; // Es6 Destructuring
		return(
			
			 <li className="task">
			  <h3 className="taskName">
			  	{task.task} - {task.status}
			  </h3>
			 	<button onClick={() => this.props.markasDone(index)}>Mark Completed</button>
			 	<button onClick={() => this.props.removefromTask(index)}>Edit Task</button>
			 	<button onClick={() => this.props.removefromTask(index)}>RemoveTask</button>
			 </li>
			)
	}

}

export default Task;
