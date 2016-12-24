/*jshint esversion: 6 */
import React, { Component } from 'react';

export default class Application extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
