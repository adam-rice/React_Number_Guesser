/*jshint esversion: 6 */
import React, { Component } from 'react';

export default class Controls extends Component {
  enableClearBtn() {
    if (this.props.guess === '' || this.props.guess === null) {
      return true
    } else return false
  }

  render() {
  const { clear, submit, reset } = this.props;
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
        disabled={this.enableClearBtn()}
      />
      <input
        className='reset-btn control'
        type='button'
        value='Reset Game'
        onClick={reset}
        disabled
      />
    </div>
  );
  };
}
