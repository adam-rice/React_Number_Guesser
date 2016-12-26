/*jshint esversion: 6 */
import React from 'react';

const Instructions = ({ instructions, lastNumberGuessed, results }) => {
  return (
    <div>
      <p tabIndex='0'>{instructions}</p>
      <h2 tabIndex='0'>{lastNumberGuessed}</h2>
      <p tabIndex='0'>{results}</p>
    </div>
  );
};

export default Instructions;
