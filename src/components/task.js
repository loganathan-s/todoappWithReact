import React from 'react';

class Task extends React.Component{
	render(){
		return(
			
			 <li className="task">
			  <h3 className="taskName">
			  	{this.props.task.task}
			  </h3>
			  {
				 	 //<button onClick={() => this.props.addToTasks(index)} disabled={!isAvailable}>{buttonText}</button>
	//		  <button onClick={() => this.props.removeFromTasksOrder(index)} disabled={!isAvailable}>{buttonText}</button> 	
			  }
			 
			 </li>
			)
	}

}

export default Task;
