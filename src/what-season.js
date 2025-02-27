const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {

  if(date === undefined) return 'Unable to determine the time of year!';
  if(!(date instanceof Date)) throw new Error ('Invalid date!');
  for(let key in date) {
    if(date[key] != date) throw new Error ('Invalid date!');
  }


  let month = date.getMonth();
  if(month === 11 || month < 2) return 'winter';
  if(month < 5) return 'spring';
  if(month < 8) return 'summer';
  return 'autumn';
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
