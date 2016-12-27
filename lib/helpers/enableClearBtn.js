/*jshint esversion: 6 */
const enableClearBtn = (integer) => {
  if (integer !== 0) {
    return false;
  } else return true;
}

export default enableClearBtn;

//using the guess state and guess !== '' (or null) will not disable clear button when input-field is cleared by the user with the delete key...
