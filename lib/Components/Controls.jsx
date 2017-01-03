/*jshint esversion: 6 */
import React from 'react';
import enableClearBtn from 'enableClearBtn';
import enableResetBtn from 'enableResetBtn';
import enableGuessBtn from 'enableGuessBtn';

const Controls = ({ clear, submit, reset, results, input }) => {
  return (
    <div>
      <input
        className='control'
        type='button'
        value='Guess'
        onClick={submit}
        disabled={enableGuessBtn(results)}
      />
      <input
        className='control'
        type='button'
        value='Clear'
        onClick={clear}
        disabled={enableClearBtn(input)}
      />
      <input
        className='reset-btn control'
        type='button'
        value='Reset Game'
        onClick={reset}
        disabled={enableResetBtn(results)}
      />
    </div>
  );
}

export default Controls;
