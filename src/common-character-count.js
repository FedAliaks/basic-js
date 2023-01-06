const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let temp = s2;
  for (let i = 0; i < s1.length; i++){
    if(temp.includes(s1[i])) {
      count++;
      const index = temp.indexOf(s1[i]);
      temp = temp.slice(0, index) + temp.slice(index + 1);
    }
   }

  return count;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
