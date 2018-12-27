import React from 'react';

const Textarea = ({ name, placeholder, formCtx: { values, handleChange, handleBlur } }) => (
  <textarea
    value={values[name]}
    name={name}
    className="form-control text"
    placeholder={placeholder}
    id={`form_field_${name}`}
    onChange={handleChange}
    onBlur={handleBlur}
  />
);

export default Textarea;
