import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import validate from '../lib/Validation';

const renderInput = field =>   {
	return (
		<div>
		    <input {...field.input} type={field.type}/> 
		    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span> }
  		</div>
  	);
}

class TaskForm extends Component {
	render() {
	  const { handleSubmit, pristine, submitting } = this.props
	  return (
	    <form onSubmit={ handleSubmit }>
	      <div>
	        <Field name="task" component={renderInput} type="text" placeholder="Enter New Task" />
	        <button type="submit">Submit</button>
	      </div>
	    </form>
	  )
	}
}

TaskForm = reduxForm({
  form: 'taskForm',
  validate

})(TaskForm)

export default TaskForm;
