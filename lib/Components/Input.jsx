/*jshint esversion: 6 */
import React from 'react';

const Input = () => {
  return (
    <input
      className='input-field'
      type='number'
      placeholder='Your best guess'
      min='1'
      max='100'
    />
  );
};

export default Input;
