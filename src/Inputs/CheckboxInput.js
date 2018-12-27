import React from 'react';

const extractValue = (name, values) => {
  if (values[name] !== undefined) {
    return values[name];
  }

  let baseFieldName = '';
  let index = 0;
  let fieldName = '';
  [baseFieldName, index, fieldName] = name.split('.');

  if (values[baseFieldName] !== undefined && values[baseFieldName][index] !== undefined) {
    return values[baseFieldName][index][fieldName];
  }
};

const CheckboxInput = ({ name, formCtx: { values, handleChange, handleBlur } }) => {
  const value = extractValue(name, values);

  return (
    <div className="form-check">
      <input
        type="checkbox"
        value={value}
        name={name}
        className="form-check-input"
        id={`form_field_${name}`}
        onChange={handleChange}
        onBlur={handleBlur}
        checked={value}
      />
    </div>
  );
}

export default CheckboxInput;
