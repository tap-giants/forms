import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { Field, FormContext } from '../../../src';
import TokensListWrapper from './TokensListWrapper';

const TokenInput = ({ name, options, formCtx, label, pickerQuery, pickerPath, filterInputMapper, addOption, removeOption }) => (
  <div className="form-group token-input">
    <ul className="token-list">
      <Field
        input="checkboxGroup"
        name={name}
        options={options}
        formCtx={formCtx}
        WrapperComponent={({ children, push }) =>
          <TokensListWrapper
            name={name}
            label={label}
            pickerQuery={pickerQuery}
            pickerPath={pickerPath}
            filterInputMapper={filterInputMapper}
            addOption={(option) => addOption(option, push)}
          > {children}
          </TokensListWrapper>
        }
        renderOption={({ value, label, remove, groupValues }) => (
          <li className="token-item">
            <span>{label}</span>
            <button className="token-clear" type="button" onClick={() => removeOption(value, remove, groupValues)}>&times;</button>
          </li>
        )}
      />
    </ul>
  </div>
);

const TokenInputWithOptions = compose(
  withStateHandlers(
    ({ name, tokenMapper, formCtx: { rawValues } }) => ({
      options: rawValues[name] ? rawValues[name].map(tokenMapper) : []
    }),
    {
      addOption: ({ options }, { tokenMapper }) => (value, callback) => {
        const option = tokenMapper(value);
        callback(option.value);

        return {
          options: [...[option], ...options]
        }
      },
      removeOption: ({ options }) => (value, callback, groupValues) => {
        callback(groupValues.indexOf(value));

        return {
          options: options.filter((option) => option.value != value)
        }
      }
    }
  )
)(TokenInput);

export default (props) => (
  <FormContext.Consumer>
    {(formCtx) => <TokenInputWithOptions {...props} formCtx={formCtx} />}
  </FormContext.Consumer>
);

