import React from 'react';

const CheckboxOption = ({ name, label, index, value, groupValues, push, remove }) => (
  <React.Fragment>
    <div className="form-check">
      <input
        name={`${name}`}
        type="checkbox"
        value={value}
        className="form-check-input"
        id={`form_field_${name}_${index}`}
        onChange={e => {
          if (e.target.checked) {
            push(value);
          } else {
            const idx = groupValues.indexOf(value);
            remove(idx);
          }
        }}
        checked={groupValues.includes(value)}
      />

      <label className="form-check-label" htmlFor={`form_field_${name}_${index}`}>
        {label}
      </label>
    </div>
  </React.Fragment>
);

export default CheckboxOption;
