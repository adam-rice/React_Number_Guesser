/*jshint esversion: 6 */
import React from 'react';

const Instructions = ({ instructions, lastNumberGuessed, results }) => {
  return (
    <div>
      <p>{instructions}</p>
      <h2>{lastNumberGuessed}</h2>
      <p>{results}</p>
    </div>
  );
};

export default Instructions;
