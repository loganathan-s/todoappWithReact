import React from 'react';
import PropTypes from 'prop-types';

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
  task: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  setCurrentTaskEditable: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default EditTaskForm;