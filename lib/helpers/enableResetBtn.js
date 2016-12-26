/*jshint esversion: 6 */
const enableResetBtn = (guess) => {
  if (guess === '#') {
    return true;
  } else return false;
}

export default enableResetBtn;
