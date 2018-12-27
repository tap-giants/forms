import React from 'react';
import { Field } from 'formik';

const includeBlankOption = (options, includeBlank) => {
  if (includeBlank) return [{ value: '', label: 'Select an option' }, ...options];

  return options;
}

const handleEvent = (e, formikHanler, customHandler, formikCtx) => {
  formikHanler(e);
  if (customHandler) customHandler(e, formikCtx);
}

const SelectInput = ({
  name,
  onChange,
  onBlur,
  options = [],
  placeholder,
  includeBlank = true,
  formCtx: { handleChange, handleBlur, ...props }
}) => (
    <Field
      name={name}
      component="select"
      placeholder={placeholder}
      className="form-control"
      id={`form_field_${name}`}
      onChange={(e) => handleEvent(e, handleChange, onChange, props)}
      onBlur={(e) => handleBlur(e, handleBlur, onBlur, props)}
    >
      {includeBlankOption(options, includeBlank).map(({ value, label }, index) =>
        <option key={index} value={value}>{label}</option>)}
    </Field>
  );

export default SelectInput;
