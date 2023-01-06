const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = Math.floor(n / 10);
  let str = '' + n;
  for(let i = 0; i < str.length; i++) {
    const temp = +(str.slice(0, i) + str.slice(i + 1));
    if(temp > max) max = temp;
  }

  return max;

}

module.exports = {
  deleteDigit
};
