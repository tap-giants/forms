import React from 'react';
import Input from './Input';

const EmailInput = ({ name, placeholder }) =>
  <Input type="email" name={name} placeholder={placeholder} />;

export default EmailInput;
