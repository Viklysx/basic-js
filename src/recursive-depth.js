const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 0;
    if (Array.isArray(arr)) return level = 1 + Math.max(level,...arr.map(elem => this.calculateDepth(elem)))
    else return 0;
  }
};