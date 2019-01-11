import React from 'react';
import Form, {
  Field,
  Submit,
  withForm,
  FormContext
} from '@tapgiants/form';

const FancyFormComponent = () => (
  <FormContext.Consumer>
    {(formCtx) => {
      console.log('formCtx', formCtx);
      // https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props

      return <div>Something very facny that depends on the form context.</div>;
    }}
  </FormContext.Consumer>
);

const FormMarkup = ({ formName, ...formikBag }) => (
  <Form {...formikBag}>
    <h1>{formName}</h1>

    <Field
      name="name"
      label="Name"
    />

    <Field
      input="email"
      name="email"
      label="Email"
    />

    <Field
      input="checkbox"
      name="active"
      label="active"
    />

    <FancyFormComponent />

    <Submit>Save</Submit>
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
    // {
    //   active: true,
    //   email: "john.doe@exmaple.com",
    //   name: "John Doe",
    // }

    console.log('handleSubmit formikBag', formikBag);
    // handleSubmit formikBag: check https://jaredpalmer.com/formik/docs/api/withFormik
  }
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form Context" />;
