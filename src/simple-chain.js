const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('');

    } else {
      this.chain.push(String(value));
    }

    return this;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(position > this.chain.length || position <= 0 || isNaN(position) || position % 1 != 0) {
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  },
  finishChain() {
    let temp = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];

    return temp;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
};


module.exports = {
  chainMaker
};
