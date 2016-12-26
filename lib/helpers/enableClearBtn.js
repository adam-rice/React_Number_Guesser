/*jshint esversion: 6 */
const enableClearBtn = (guess) => {
  if (guess === '' || guess === null) {
    return true;
  } else return false;
}

export default enableClearBtn;
