import React from 'react';
import FormContext from './FormContext';

import {
  Input,
  TextInput,
  EmailInput,
  PasswordInput,
  NumberInput,
  TextareaInput,
  SelectInput,
  RadioGroupInput,
  CheckboxInput,
  CheckboxGroupInput
} from './Inputs';

const INPUTS = {
  text: TextInput,
  textarea: TextareaInput,
  select: SelectInput,
  checkbox: CheckboxInput,
  checkboxGroup: CheckboxGroupInput,
  radioGroup: RadioGroupInput,
  email: EmailInput,
  password: PasswordInput,
  number: NumberInput
};

export default ({ input, name, label, placeholder, hint, ...props }) => {
  const Component = typeof input === 'function' ? input : INPUTS[input] || Input;

  const fieldSpecificClasses = input == 'textarea' ? ' text' : '';

  return (
    <FormContext.Consumer>
      {({ touched, errors, ...formCtx }) => (
        <div className={'form-group' + fieldSpecificClasses + (touched[name] && errors[name] ? ' has-error' : '')}>
          <label className="control-label" htmlFor={`form_field_${name}`}>{label}</label>

          <Component
            name={name}
            placeholder={placeholder}
            formCtx={formCtx}
            {...props}
          />

          {hint && <span className="help-block">{hint}</span>}
          {touched[name] && errors[name] && <span className="help-block">{errors[name]}</span>}
        </div>
      )}
    </FormContext.Consumer>
  );
};
