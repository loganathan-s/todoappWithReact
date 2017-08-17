import React from 'react';
class EditTaskForm extends React.Component{
	

	render(){
		const { task, index, setCurrentTaskEditable } = this.props
		return(
			<div>
			  <input ref={(input) => this.taskDesc = input } type="text" placeholder="Task"/>
			  <button type="submit" onClick={() => this.props.updateTask(index, this.taskDesc.value)}>Update</button>
			  <button onClick={() => setCurrentTaskEditable(index)}>Cancel</button>
			</div>
			)
	}
}

EditTaskForm.PropTypes = {
  task: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  setCurrentTaskEditable: React.PropTypes.func.isRequired,
  updateTask: React.PropTypes.func.isRequired,
};

export default EditTaskForm;