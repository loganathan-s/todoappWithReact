// Forma Validations
//http://redux-form.com/6.0.0-alpha.4/examples/syncValidation/
const validate = values => {
  const errors = {}
  if (!values.task) {
    errors.task = 'Required'
  }
  return errors
}

export default validate;
