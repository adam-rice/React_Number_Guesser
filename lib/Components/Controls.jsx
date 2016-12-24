/*jshint esversion: 6 */
import React from 'react';

const Controls = () => {
  return (
    <div>
      <input
        className='control'
        type='button'
        value='Guess'
      />
      <input
        className='control'
        type='button'
        value='Clear'
      />
      <input
        className='reset-btn control'
        type='button'
        value='Reset Game'
      />
    </div>
  );
};

export default Controls;
