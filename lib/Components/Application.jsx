/*jshint esversion: 6 */
import React, { Component } from 'react';
import Instructions from './Instructions';
import Input from './Input';
import Controls from './Controls';

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
    this.state.mysteryNumber = Math.floor((Math.random() * 100) + 1);
  }

  handleChange(e) {
    this.setState({guess: parseInt(e.target.value)});
  }

  clearInput() {
    this.setState({guess: ''});
  }

  submitGuess() {
    if (this.state.guess < this.state.mysteryNumber) {
      this.lowGuess();
    } else if (this.state.guess > this.state.mysteryNumber) {
      this.highGuess();
    } else {
      this.correctGuess();
    }
    this.clearInput();
  }

  lowGuess() {
    this.setResultsMessage('Sorry, that guess is too low. Try a higher number.');
  }

  highGuess() {
    this.setResultsMessage('Sorry, that guess is too high. Try a lower number.')
  }

  correctGuess() {
    //
  }

  setResultsMessage(message) {
    this.setState({results: message});
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
        />
      </div>
    )
  }
}
