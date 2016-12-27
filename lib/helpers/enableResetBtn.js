/*jshint esversion: 6 */
const enableResetBtn = (results) => {
  if (results !== 'Click Reset Game to play again.') {
    return true;
  } else return false;
}

export default enableResetBtn;
