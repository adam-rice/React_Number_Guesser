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
      results: 'Good luck!'
    };
    this.generateMysteryNumber();
    console.log(this.state.mysteryNumber);
  }

  generateMysteryNumber() {
    this.state.mysteryNumber = randomNumber();
  }

  handleChange(e) {
    this.setState({guess: parseInt(e.target.value)});
  }

  clearInput() {
    this.setState({guess: ''});
  }

  submitGuess() {
    let guess = this.state.guess
    let mysteryNumber = this.state.mysteryNumber
    this.displayGuessedNumber(guess);
    if (isNaN(this.state.guess)) {
      this.NaNGuessed();
    } else if (guess > 100 || guess < 1) {
      this.outsideRange();
    } else if (guess < mysteryNumber) {
      this.lowGuess();
    } else if (guess > mysteryNumber) {
      this.highGuess();
    } else {
      this.correctGuess();
    }
    this.clearInput();
  }

  displayGuessedNumber(number) {
    this.setState({lastNumberGuessed: number})
  }

  lowGuess() {
    this.setResultsMessage('Sorry, that guess is too low. Try a higher number.');
  }

  highGuess() {
    this.setResultsMessage('Sorry, that guess is too high. Try a lower number.')
  }

  correctGuess() {
    this.setInstructionsMessage('Your guess is correct!');
    this.setResultsMessage('Click Reset Game to play again.');
  }

  setResultsMessage(message) {
    this.setState({results: message});
  }

  setInstructionsMessage(message) {
    this.setState({instructions: message})
  }

  NaNGuessed() {
    this.setResultsMessage('Please guess a number');
    this.displayGuessedNumber('?');
  }

  outsideRange() {
    this.setResultsMessage('You may only guess between 1-100');
    this.displayGuessedNumber('0');
  }

  resetGame() {
    this.setState({
      guess: '',
      lastNumberGuessed: '#',
      instructions: 'Please guess a number between 1-100',
      results: 'Good luck!'
      }, () => {
        this.generateMysteryNumber();
        console.log(this.state.mysteryNumber);
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
          guess={this.state.guess}
          lastNumberGuessed={this.state.lastNumberGuessed}
        />
      </div>
    )
  }

}
