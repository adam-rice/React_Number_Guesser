/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import Application from './Components/Application';
require('./CSS/styles.scss');

render(<Application title='Number Guesser' />, document.getElementById('application'));
