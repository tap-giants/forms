import React from 'react';

import Form, { Field, Submit, withForm } from '@tapgiants/form';

const FormMarkup = ({ formName, ...formikBag }) => (
  <Form {...formikBag}>
    <h1>{formName}</h1>

    {/* Text field */}
    <Field
      name="name"
      label="Name"
    />

    {/* Email field */}
    <Field
      input="email"
      name="email"
      label="Email"
    />

    {/* Password field */}
    <Field
      input="password"
      name="password"
      label="Password"
    />

    {/* Select field */}
    <Field
      input="select"
      name="country"
      label="Country"
      options={[
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' }
      ]}
    />

    {/* Select field with no blank option and custom onChange and onBlur */}
    <Field
      input="select"
      name="color"
      label="Color"
      options={[
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' }
      ]}
      includeBlank={false}
      onChange={(e, formCtx) => {
        console.log('e', e);
        console.log('formCtx', formCtx);
      }}
      onBlur={(e, formCtx) => {
        console.log('e', e);
        console.log('formCtx', formCtx);
      }}
    />

    {/* Radio buttons field */}
    <Field
      input="radioGroup"
      name="gender"
      label="Gender"
      options={[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ]}
    />

    {/* Checkbox field */}
    <Field
      input="checkbox"
      name="active"
      label="active"
    />

    {/* Checkboxes group field */}
    <Field
      input="checkboxGroup"
      name="industries"
      label="Industries"
      options={[
        { value: 1, label: 'IT' },
        { value: 2, label: 'Cinema' },
        { value: 3, label: 'Pharmacy' }
      ]}
    />

    {/* Textarea field */}
    <Field
      input="textarea"
      name="notes"
      label="Notes"
    />

    <Submit>Register</Submit>
  </Form>
);

const TapGiantsForm = withForm({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
    country: '',
    color: 'red',
    gender: '',
    active: false,
    industries: [],
    notes: ''
  }),
  handleSubmit: (values, formikBag) => {
    const { setSubmitting } = formikBag;

    setSubmitting(false);

    console.log('handleSubmit values: ', values);
    // handleSubmit values:
    // {
    //   active: true,
    //   color: "blue",
    //   country: "BG",
    //   email: "john.doe@exmaple.com",
    //   gender: "male",
    //   industries: [2],
    //   name: "John Doe",
    //   notes: "Very important note!",
    //   password: "123456"
    // }

    console.log('handleSubmit formikBag', formikBag);
    // handleSubmit formikBag: check https://jaredpalmer.com/formik/docs/api/withFormik
  }
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form Fields" />;
