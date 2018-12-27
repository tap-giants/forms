import React from 'react';

const RadioGroupInput = ({ name, options = [], formCtx: { values, handleChange, handleBlur } }) => (
  <React.Fragment>
    {options.map(({ value, label }, index) => (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`form_field_${name}_${index}`}
          value={value}
          checked={values[name] === value}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label className="form-check-label" htmlFor={`form_field_${name}_${index}`}>
          {label}
        </label>
      </div>
    ))}
  </React.Fragment>
);

export default RadioGroupInput;
