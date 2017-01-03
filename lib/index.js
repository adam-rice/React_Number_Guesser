/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import Application from 'Application';
require('Styles');

render(<Application title='Number Guesser' />, document.getElementById('application'));
