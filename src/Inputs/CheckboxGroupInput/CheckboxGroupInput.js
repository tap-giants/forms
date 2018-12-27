import React from 'react';
import { FieldArray } from 'formik';
import CheckboxOption from './CheckboxOption';

const CheckboxGroupInput = ({ name, options = [], WrapperComponent, renderOption, formCtx: { values } }) => {
  const groupValues = values[name] || [];

  const OptionComponent = renderOption || CheckboxOption;
  const OptionsWrapperComponent = WrapperComponent || React.Fragment;

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <OptionsWrapperComponent {...(WrapperComponent ? arrayHelpers : {})}>
          {options.map(({ value, label }, index) =>
            <OptionComponent
              key={index}
              name={name}
              label={label}
              index={index}
              value={value}
              groupValues={groupValues}
              push={arrayHelpers.push}
              remove={arrayHelpers.remove}
            />
          )}
        </OptionsWrapperComponent>
      )}
    />
  );
}

export default CheckboxGroupInput;
