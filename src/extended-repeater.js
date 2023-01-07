const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let temp = str;

  console.log(options.addition)

  optionsSeparator = (options.separator) ? options.separator : "+";
  optionsAdditionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";
  optionsAddition = (options.addition) ? options.addition  : "";



  for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
    temp += optionsAddition + optionsAdditionSeparator;
    console.log(temp);
  }

  temp += optionsAddition;


  let answer = '';
  for(let i = 0; i < options.repeatTimes - 1; i++) {
    answer += temp + optionsSeparator;
  }


  return answer + temp;


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
