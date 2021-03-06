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

`Form` component should be used in a combination with [`withForm`](#withformformikprops-objectreactcomponent) in order to receive [`formikBag`](https://jaredpalmer.com/formik/docs/api/withFormik) which will be passed to the [`FormContext`](#formcontext-usage).

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
})(FormMarkup);

// Pass custom prop to the form
export default () => <TapGiantsForm formName="Test Form" />;
```

### withForm(formikProps: Object):React.Component

`withForm` is a `withFormik` wrapper.

Formik [reference](https://jaredpalmer.com/formik/docs/api/withFormik).

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

### Some of the `Field` input types support additional props

#### Select input props:

#### `options`: Array
Options property will be used to populate the select field.
The following options shape is required:

```js
[
  { value: 'BG', label: 'Bulgaria' },
  { value: 'BF', label: 'Burkina Faso' },
  { value: 'BI', label: 'Burundi' }
]
```

##### `includeBlank`: Boolean, Default: true
If the value of the `includeBlank` prop is set to `false` removes the empty option from the select.

##### `onChange`: Function
Custom `onChange` handler. It receives two arguments.
The first one is the standard event passed when `onChange` is called, so you can get selected value with `e.target.value.`
The second one is the [`formCtx`](#formcontext-usage).

##### `onBlur`: Function
Custom `onBlur` handler. It receives two arguments.
The first one is the standard event passed when `onBlur` is called, so you can get selected value with `e.target.value.`
The second one is the [`formCtx`](#formcontext-usage).

#### RadioGroup input props:

#### `options`: Array
Options property will be used to create the radio options.
The following options shape is required:

```js
[
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
]
```

#### CheckboxGroup input props:

#### `options`: Array
Options property will be used to create the checkbox options.
The following options shape is required:

```js
[
  { value: 1, label: 'IT' },
  { value: 2, label: 'Cinema' },
  { value: 3, label: 'Pharmacy' }
]
```

#### `WrapperComponent`: React.Component
Use in order to create custom checkbox group.

If `WrapperComponent` is passed it will receive Formik's [FieldArray](https://jaredpalmer.com/formik/docs/api/fieldarray#fieldarray-helpers) array helpers.

#### `renderOption`: React.Component
Use in order to customize how the checkbox will be rendered.

It will receive the following props:

  * name: String - Checkbox group name.
  * label: String - Option label.
  * value: Any - Option value.
  * index: Integer - The position of the option in passed `options` prop.
  * groupValues: Array - Selected options.
  * push: Function - `arrayHelpers.push` is a [FieldArray](https://jaredpalmer.com/formik/docs/api/fieldarray#fieldarray-helpers) helper.
  * remove: Function - `arrayHelpers.remove` is a [FieldArray](https://jaredpalmer.com/formik/docs/api/fieldarray#fieldarray-helpers) helper.

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
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form Fields" />;
```

### Custom field

If `React.Component` is passed as an input prop to the [`Field`](#field-api) it will receive the following props:

#### `name`: String
Field name.

#### `placeholder`: String
Field label.

#### `formCtx`: Object

[`formCtx`](#formcontext-usage) prop contains all the props passed to the [`<Form>`](#form-api) and
 a list of Formik methods and props. Formik [reference](https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props).

All passed props to the [`Field`]((#field-api)) will be provided to the custom component.

### Custom field example

```jsx
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
```

### FormContext usage

`FormContext` stores all the passed props and `Formik` props and methods.

In order to use `FormContext` just wrap your component with it and all the context will be provided via `render prop` function.

Formik [reference](https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props).

### FormContext example

```jsx
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
```

### Formik API

Formik [docs](https://jaredpalmer.com/formik/docs/overview).

## Development

Link the package from your target project and run `yarn start`. This will start the webpacker watcher.

Once you are satisfied with your changes, use `yarn publish` to push the new version to npmjs.org.

