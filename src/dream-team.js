const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let arrAnswer = [];
  members.forEach(item => {
    if(typeof item === 'string') {
      let temp = item.trim();
      arrAnswer.push(temp[0].toUpperCase());
    }
  });

  let answer = arrAnswer.sort().join('');

  return answer;





/*   throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
