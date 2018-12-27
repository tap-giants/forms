import React from 'react';
import { Field } from 'formik';

const Input = ({ type = 'text', name, placeholder }) => (
  <Field
    type={type}
    name={name}
    placeholder={placeholder}
    className="form-control"
    id={`form_field_${name}`}
  />
);

export default Input;
