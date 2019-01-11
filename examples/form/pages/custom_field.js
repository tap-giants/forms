import React from 'react';
import Form, { Field, Submit, withForm } from '@tapgiants/form';

import '../style.css';

const ActiveInput = ({ name, placeholder, formCtx }) => {
  const { values, setFieldValue } = formCtx;

  return (
    <a href="#" className={values[name] ? 'active' : 'inactive'} onClick={(e) => {
      e.preventDefault();

      setFieldValue(name, !values[name]);
    }}>{values[name] ? 'Deactivate me!' : 'Activate me!'}{values[name]}</a>
  );
};

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

    <Field
      input={ActiveInput}
      name="active"
      label="Active"
    />

    <Submit>Register</Submit>
  </Form>
);

const TapGiantsForm = withForm({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    active: false
  }),
  handleSubmit: (values, formikBag) => {
    const { setSubmitting } = formikBag;

    setSubmitting(false);

    console.log('handleSubmit values: ', values);
    // handleSubmit values:
    // { name: "", email: "", active: false }

    console.log('handleSubmit formikBag', formikBag);
    // handleSubmit formikBag: check https://jaredpalmer.com/formik/docs/api/withFormik
  }
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form Custom Field" />;
