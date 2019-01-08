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
  CheckboxGroupInput,
  DateInput,
  DateRangeInput
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
  number: NumberInput,
  date: DateInput,
  dateRange: DateRangeInput
};

/**
 * Field types
 * <Field name="name" label="Name" />
 * <Field input="email" name="email" label="Email" />
 * <Field input="password" name="password" label="Password" />
 * <Field input="textarea" name="notes" label="Notes" />
 * <Field input="select" name="country" label="Country" options={COUNTRIES} onChange={...} onBlur={...} />
 * <Field input="radioGroup" name="gender" label="Gender" options={GENDERS} />
 * <Field input="checkbox" name="hq" label="HQ?" />
 * <Field input="checkboxGroup" name="industries" label="Industries" options={INDUSTRIES} />
 * <Field input="date" name="from" label="From" />
 * <Field
 *  input="dateRange"
 *  startFieldName="from"
 *  endFieldName="to"
 *  label="Campaign period"
 * />
 **/

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
