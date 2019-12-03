import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="task" component="input" type="text" />
    <button type="submit">Submit</button>
  </form>
);

const decoratedForm = reduxForm({ form: 'new-todo' })(Form);

export default decoratedForm;
