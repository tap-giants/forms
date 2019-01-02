// import React from 'react';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { SingleDatePicker } from 'react-dates';
// import moment from 'moment';
// import { compose, withStateHandlers } from 'recompose';

// const DateInput = ({ name, focuseHandler, focused, formCtx: { values, setFieldValue }, ...props }) => (
//   <SingleDatePicker
//     date={moment(values[name])}
//     onDateChange={date => setFieldValue(name, date.toISOString())}
//     focused={focused}
//     onFocusChange={({ focused }) => focuseHandler(focused)}
//     id={`${name}_date_picker`}
//     {...props}
//   />
// );

// const withFocusHandlers = withStateHandlers(
//   { focused: false },
//   { focuseHandler: () => (focused) => ({ focused }) }
// );

// export default compose(
//   withFocusHandlers
// )(DateInput);

export default () => null;
