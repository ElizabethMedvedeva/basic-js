const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
let sum = 1;
for(let element of arr) {
  if(Array.isArray(element)) {
    const depth  = this.calculateDepth(element) + 1;
    if(depth > sum) {
      sum = depth;
    }
  }
}
return sum;
}
}

module.exports = {
  DepthCalculator
};
