import React from 'react';
import FormContext from './FormContext';

const Submit = ({ children, ...props }) => (
  <FormContext.Consumer>
    {({ isSubmitting }) => (
      <button type="submit" disabled={isSubmitting} {...props}>{children}</button>
    )}
  </FormContext.Consumer>
)

export default Submit;
