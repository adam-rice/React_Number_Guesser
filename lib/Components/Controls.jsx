/*jshint esversion: 6 */
import React from 'react';
import enableClearBtn from '../helpers/enableClearBtn';
import enableResetBtn from '../helpers/enableResetBtn';

const Controls = ({ clear, submit, reset, guess, lastNumberGuessed }) => {
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
        disabled={enableClearBtn(guess)}
      />
      <input
        className='reset-btn control'
        type='button'
        value='Reset Game'
        onClick={reset}
        disabled={enableResetBtn(lastNumberGuessed)}
      />
    </div>
  );
}

export default Controls;
