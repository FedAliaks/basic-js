const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrTemp = [];
  arr.forEach(item => {
    if(item != -1) arrTemp.push(item);
  })
  arrTemp.sort((a, b) => a - b);

  let indexTemp = 0;
  const answer = [];

  arr.forEach(item => {
    if(item === -1) {
      answer.push(-1);
    } else {
      answer.push(arrTemp[indexTemp]);
      indexTemp++;
    }
  })

  return answer;




  throw new NotImplementedError('Not implemented');


  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
