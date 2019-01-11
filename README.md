# What is @tapgiants/form

@tapgiants/form is build on the top of [Formik](https://github.com/jaredpalmer/formik) and exports all
the [Formik](https://github.com/jaredpalmer/formik) functionality. The main goal of the package is to
provide simple form field components with no need for form state managment.

## Installation

Install peer dependencies:
```bash
yarn add recompose
```

Install @tapgiants/form

```bash
yarn add @tapgiants/form
```

## Form API

`Form` component should be used in a combination with [`withForm`](#updateme) in order to receive [`formikBag`](https://jaredpalmer.com/formik/docs/api/withFormik) which will be passed to the [`FormContext`](#updateme).

### Props

It receives [`formikBag`](https://jaredpalmer.com/formik/docs/api/withFormik) props and
custom props passed to the form component.

### Form example
```jsx
import React from 'react';

import Form, { Field, Submit, withForm } from '@tapgiants/form';

const FormMarkup = ({ formName, ...formikBag }) => (
  // Pass formikBag props to the Form component. In this way formik props are set in the `FormContext`
  <Form {...formikBag}>
    <h1>formName</h1>

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

// Here we use withForm in order to provide the FormikBag props to the Form component
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
})(FormMarkup)

// Pass custom prop to the form
export default () => <TapGiantsForm formName="Test Form" />;
```


## Submit API

All passed props will be provided to the `button` tag in the component.

### Submit example

```jsx
<Submit>Login</Submit>

// OR

<Submit className="class-name">Login</Submit>
```

### Field API

### Props

#### `input`: String || React.Component

Defines field type. The default type is `text`.

Possible types:
 * `text`
 * `textarea`
 * `select`
 * `checkbox`
 * `checkboxGroup`
 * `radioGroup`
 * `email`
 * `password`
 * `number`

#### `name`: String
Field name.

#### `label`: String
Field label.

#### `placeholder`: String
Field label.

#### `hint`: String
Field hint.

#### Custom field

If `React.Component` is passed as input it will receive the following props:

#### `name`: String
Field name.

#### `placeholder`: String
Field label.

#### `formCtx`: Object

`formCtx` prop contains all the props passed to the `<Form>` and
 a list of Formik methods and props. Formik [reference](https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props).

All passed props to the `Field` will be provided to the custom component.

### Field examples

```jsx
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
})(FormMarkup)

export default () => <TapGiantsForm formName="Test Form Fields" />;
```

### FormContext usage

`FormContext` stores all the passed props and `Formik` props and methods.

In order to use `FormContext` just wrap your component with it and all the context will be provided via `render prop` function.

Formik [reference](https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props).

### FormContext example

```jsx
import { FormContext } from '@tapgiants/form';

const MyCustomComponent = () => (
  <FormContext.Consumer>
    {(props) => (
      // TODO: add console.log with the props
    )}
  </FormContext.Consumer>
);
```

### withForm(formikProps: Object):React.Component

`withForm` is a `withFormik` wrapper.

Formik [reference](https://jaredpalmer.com/formik/docs/api/withFormik).

### Formik API

Formik [docs](https://jaredpalmer.com/formik/docs/overview).

## Development

Link the package from your target project and run `yarn start`. This will start the webpacker watcher.

Once you are satisfied with your changes, use `yarn publish` to push the new version to npmjs.org.

