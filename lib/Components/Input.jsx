/*jshint esversion: 6 */
import React from 'react';

const Input = ({ onChange, guess }) => {
  return (
    <input
      className='input-field'
      type='number'
      placeholder='Your best guess'
      min='1'
      max='100'
      onChange={onChange}
      value={guess}
    />
  );
};

export default Input;
