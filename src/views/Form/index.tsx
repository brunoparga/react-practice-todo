import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="task" component="input" type="text" />
    <button type="submit">Submit</button>
  </form>
);

Form = reduxForm({ form: 'new-todo' })(Form);

export default Form;
