/*jshint esversion: 6 */
const enableGuessBtn = (results) => {
  if (results === 'Click Reset Game to play again.') {
    return true;
  } else return false;
}

export default enableGuessBtn;
