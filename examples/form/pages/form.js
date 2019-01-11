import React from 'react';

import Form, { Field, Submit, withForm } from '@tapgiants/form';

const FormMarkup = ({ formName, ...formikBag }) => (
  <Form {...formikBag}>
    <h1>{formName}</h1>

    <Field
      input="email"
      name="email"
      label="E-mail"
    />

    <Field
      input="password"
      name="password"
      label="Password"
    />

    <Submit>Login</Submit>
  </Form>
);

const TapGiantsForm = withForm({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, formikBag) => {
    const { setSubmitting } = formikBag;

    setSubmitting(false);

    console.log('handleSubmit values: ', values);
    // handleSubmit values: { email: "", password: "" }

    console.log('handleSubmit formikBag', formikBag);
    // handleSubmit formikBag: check https://jaredpalmer.com/formik/docs/api/withFormik
  }
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form" />;
