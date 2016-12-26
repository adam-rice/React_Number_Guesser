/*jshint esversion: 6 */
const enableClearBtn = (guess) => {
  if (guess !== '') {
    return false;
  } else return true;
}

export default enableClearBtn;
