const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    //true or false
    if(direction === true || direction === undefined) {
      this.direction = true;
    } else {
      this.direction = false;
    }

  }
  encrypt(string, key) {
    if(string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let fullKey = key;
    let tempString = string.toUpperCase();
/*     if(!this.direction) {
      tempString = tempString.split('').reverse().join('');
    } */
    let answer = [];
    let countSpaces = 0;


    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while(string.length > fullKey.length) {
      fullKey += key;
    }

    fullKey = fullKey.slice(0, string.length).toUpperCase();

    for(let i = 0; i < tempString.length; i++) {
      if(tempString[i] === ' ' || alphabet.indexOf(tempString[i], 0) === -1) {
        answer.push(tempString[i]);
        countSpaces++;
      } else {
        let index = alphabet.indexOf(tempString[i], 0) + alphabet.indexOf(fullKey[i - countSpaces], 0);
        answer.push(alphabet[index]);
      }

    }

    if(!this.direction) {
      return answer.reverse().join('');
    }



    return answer.join('');


/*     throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
  decrypt(string, key) {
    if(string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let fullKey = key;
    let answer = [];
    let tempString = string.toUpperCase();
    let countSpaces = 0;
/*     if(!this.direction) {
      tempString = tempString.split('').reverse().join();
    } */

    while(string.length > fullKey.length) {
      fullKey += key;
    }

    fullKey = fullKey.slice(0, string.length).toUpperCase();
    console.log(fullKey);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i = 0; i < tempString.length; i++) {
      if(tempString[i] === ' ' || alphabet.indexOf(tempString[i]) === -1) {
        answer.push(tempString[i]);
        countSpaces++;
      } else {
        let index = alphabet.lastIndexOf(tempString[i]) - alphabet.indexOf(fullKey[i - countSpaces], 0);
        answer.push(alphabet[index]);
      }

    }

    if(!this.direction) {
      return answer.reverse().join('');
    }



    return answer.join('');




/*     throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
