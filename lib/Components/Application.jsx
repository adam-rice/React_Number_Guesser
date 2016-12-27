/*jshint esversion: 6 */
import React, { Component } from 'react';
import Instructions from './Instructions';
import Input from './Input';
import Controls from './Controls';
import randomNumber from '../helpers/random-number';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      mysteryNumber: '',
      guess: '',
      lastNumberGuessed: '#',
      instructions: 'Please guess a number between 1-100',
      results: 'Good luck!',
      inputFieldLength: 0
    };
    this.generateMysteryNumber();
  }

  generateMysteryNumber() {
    this.state.mysteryNumber = randomNumber();
  }

  handleChange(e) {
    const input = document.querySelector('.input-field');
    this.setState({
      guess: parseInt(e.target.value),
      inputFieldLength: input.value.length
    });
  }

  clearInput() {
    this.setState({guess: '', inputFieldLength: 0});
  }

  submitGuess() {
    const guess = this.state.guess
    const mysteryNumber = this.state.mysteryNumber
    this.displayGuessedNumber(guess);
    if (isNaN(guess) || guess === '') {
      this.NaNGuessed();
    } else if (guess > 100 || guess < 1) {
      this.outsideRange();
    } else if (guess < mysteryNumber) {
      this.incorrectGuess('low', 'higher');
    } else if (guess > mysteryNumber) {
      this.incorrectGuess('high', 'lower');
    } else {
      this.correctGuess();
    }
    this.clearInput();
  }

  incorrectGuess(issue, advice) {
    let message = 'Sorry, that guess is too ' + issue + '. Try a ' + advice + ' number.';
    this.setResultsMessage(message);
  }

  correctGuess() {
    this.setState({
      instructions: 'Your guess is correct!',
      inputFieldLength: 0
    });
    this.setResultsMessage('Click Reset Game to play again.');
  }

  setResultsMessage(message) {
    this.setState({results: message});
  }

  NaNGuessed() {
    this.setResultsMessage('Please guess a number');
    this.displayGuessedNumber('?');
  }

  outsideRange() {
    this.setResultsMessage('You may only guess between 1-100');
    this.displayGuessedNumber('0');
  }

  displayGuessedNumber(number) {
    this.setState({lastNumberGuessed: number})
  }

  resetGame() {
    this.setState({
      guess: '',
      lastNumberGuessed: '#',
      instructions: 'Please guess a number between 1-100',
      results: 'Good luck!',
      inputFieldLength: 0
      }, () => {
        this.generateMysteryNumber();
    });
  }

  render() {
    return (
      <div>
        <h1 tabIndex='0'>{this.props.title}</h1>
        <Instructions
          lastNumberGuessed={this.state.lastNumberGuessed}
          instructions={this.state.instructions}
          results={this.state.results}
        />
        <Input
          handleChange={this.handleChange.bind(this)}
          guess={this.state.guess}
        />
        <Controls
          clear={this.clearInput.bind(this)}
          submit={this.submitGuess.bind(this)}
          reset={this.resetGame.bind(this)}
          results={this.state.results}
          input={this.state.inputFieldLength}
        />
      </div>
    )
  }
}
