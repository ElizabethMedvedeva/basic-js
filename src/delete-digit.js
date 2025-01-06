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
let digits = n.toString().split('');
let maxNumber = 0;
for (let i = 0; i < digits.length; i++){
  const temp = [...digits];
  temp.splice(i, 1);
  const number = parseInt(temp.join(''), 10);
  if(number > maxNumber) {
    maxNumber = number;
  }
}
return maxNumber;
}

module.exports = {
  deleteDigit
};
