const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw Error("\'arr\\");

  let answer = [];
  const indexMax = arr.length - 1;
  let discardNext = false;

  arr.forEach((item, index) => {
    console.log('item: ' + item + ' index: ' + index)
    if(discardNext) {
      discardNext = false;
    } else if(item === '--double-next') {
      if(index !== indexMax) answer.push(arr[index + 1]);
    } else if(item === '--discard-prev') {
      if(index !== 0) answer.pop();
    } else if(item === '--double-prev') {
      if(index !== 0) answer.push(arr[index - 1]);
    } else if (item === '--discard-next') {
      discardNext = true;
    } else {
      answer.push(item);
    }
  })

  return answer;



  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
