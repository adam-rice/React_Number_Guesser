/*jshint esversion: 6 */
import React, { Component } from 'react';
import Instructions from './Instructions';
import Input from './Input';
import Controls from './Controls';

export default class Application extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Instructions />
        <Input />
        <Controls />
      </div>
    )
  }
}
