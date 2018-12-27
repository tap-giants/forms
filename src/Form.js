import React from 'react';
import FormContext from './FormContext';

const Form = ({ handleSubmit, children, ...props }) => (
  <FormContext.Provider value={props}>
    <form onSubmit={handleSubmit}>
      {props.errors && props.errors.generalError && <span>{props.errors.generalError}</span>}
      {children}
    </form>
  </FormContext.Provider>
);

export default Form;
