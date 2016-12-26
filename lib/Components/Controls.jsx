/*jshint esversion: 6 */
import React from 'react';

const Controls = ({ clear, submit, reset }) => {
  return (
    <div>
      <input
        className='control'
        type='button'
        value='Guess'
        onClick={submit}
      />
      <input
        className='control'
        type='button'
        value='Clear'
        onClick={clear}
      />
      <input
        className='reset-btn control'
        type='button'
        value='Reset Game'
        onClick={reset}
      />
    </div>
  );
};

export default Controls;
