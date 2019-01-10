# What is @tapgiants/graphql

@tapgiants/form is build on the top of [Formik](https://github.com/jaredpalmer/formik) and exports all
the [Formik](https://github.com/jaredpalmer/formik) functionality. The main goal of the package is to
provide simple form field components with no need for form state managment.

## Installation

Install peer dependencies:
```bash
yarn recompose
```

Install @tapgiants/graphql

```bash
yarn add @tapgiants/form
```

## Form API

### Props

#### `handleSubmit: Function`

A callback function that will be called when the form is submitted.
Formik [reference](https://jaredpalmer.com/formik/docs/api/withFormik#handlesubmit-values-values-formikbag-formikbag-void).

#### `children`: Children

Form fields.

>All passed props that are not in the list above will be passed to the form context.

## Submit API

All passed props will be provided to the `button` tag in the component.

### Submit example

```jsx
<Submit>Login</Submit>
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
 <Field name="name" label="Name" />
 <Field input="email" name="email" label="Email" />
 <Field input="password" name="password" label="Password" />
 <Field input="textarea" name="notes" label="Notes" />
 <Field input="select" name="country" label="Country" options={COUNTRIES} onChange={...} onBlur={...} />
 <Field input="radioGroup" name="gender" label="Gender" options={GENDERS} />
 <Field input="checkbox" name="hq" label="HQ?" />
 <Field input="checkboxGroup" name="industries" label="Industries" options={INDUSTRIES} />
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

