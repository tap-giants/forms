// import React from 'react';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker } from 'react-dates';
// import moment from 'moment';
// import { compose, withStateHandlers } from 'recompose';

// const DateRangeInput = ({
//   startFieldName,
//   endFieldName,
//   focuseHandler,
//   focused,
//   formCtx: { values, setFieldValue },
//   name,
//   placeholder,
//   ...props
// }) => {
//   const startDateValue = values[startFieldName];
//   const endDateValue = values[endFieldName];

//   return (
//     <DateRangePicker
//       startDate={moment(startDateValue)}
//       startDateId={`${startFieldName}_date_range_picker`}
//       endDate={moment(endDateValue)}
//       endDateId={`${endFieldName}_date_range_picker`}
//       onDatesChange={({ startDate, endDate }) => {
//         if (startDate) setFieldValue(startFieldName, startDate.toISOString());
//         if (endDate) setFieldValue(endFieldName, endDate.toISOString());
//       }}
//       focusedInput={focused}
//       onFocusChange={(focusedInput) => focuseHandler(focusedInput)}
//       {...props}
//     />
//   );
// }

// const withFocusHandlers = withStateHandlers(
//   { focused: null },
//   { focuseHandler: () => (focused) => ({ focused }) }
// );

// export default compose(
//   withFocusHandlers
// )(DateRangeInput);
export default () => null;
