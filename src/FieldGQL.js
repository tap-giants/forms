import React from 'react';
import { Query } from 'react-apollo';
import Field from './Field';

const formatOptions = (options, keyName, keyLabel) =>
  options.map((option) => {
    let label = typeof keyLabel == 'function' ? keyLabel(option) : option[keyLabel];
    return { value: option[keyName], label: label };
  });

/**
 * Examples
 *
 * <FieldGQL
 *   input="select"
 *   name="country"
 *   label="Country"
 *   valuesQuery={COUNTRIES}
 *   valueKey="code"
 *   valueLabel="name"
 *   valuePath="countries"
 * />
 *
 * <FieldGQL
 *   input="checkboxGroup"
 *   name="industries"
 *   label="Industries"
 *   valuesQuery={INDUSTRIES}
 *   valueKey="id"
 *   valueLabel="name"
 * />
 *
 * <FieldGQL
 *   input="select"
 *   name="primaryContact"
 *   label="Employee"
 *   valuesQuery={CONTACTS}
 *   valueKey="id"
 *   valueLabel={(item) => `${item.firstName} ${item.lastName}`}
 *   valuePath="contacts"
 * />
 */

const FieldGQL = ({ valuesQuery, ...props }) => (
  <Query query={valuesQuery}>
    {({ loading, data }) => {
      if (loading) return 'Loading...';

      const path = props.valuePath || props.name;

      return <Field
        {...props}
        options={formatOptions(data[path].list, props.valueKey, props.valueLabel)}
      />;
    }}
  </Query>
);

export default FieldGQL;
