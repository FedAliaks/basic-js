const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = [];
  let count = 1;
  let letter = str[0];
  for (let i = 1; i < str.length; i++) {
    if(str[i] === letter) {
      count++
    } else{
      if(count > 1) {
        answer.push(count);
      }

      answer.push(letter);
      count = 1;
      letter = str[i]
    }
    if(i === str.length - 1) {
      if(count > 1) {
        answer.push(count);
      }
      answer.push(letter);
    }

  
  }

  return answer.join('');






  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
