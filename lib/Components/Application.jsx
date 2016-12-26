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
      numberGuessed: '',
      lastNumberGuessed: '#',
      instructions: 'Please guess a number between 1-100',
      results: 'Good luck!'
    };
    //generateMysteryNumber
    //console log
  }

  generateMysteryNumber() {
    this.state.mysteryNumber = Math.floor((Math.random() * 100) + 1);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Instructions
          lastNumberGuessed={this.state.lastNumberGuessed}
          instructions={this.state.instructions}
          results={this.state.results}
        />
        <Input />
        <Controls />
      </div>
    )
  }
}
