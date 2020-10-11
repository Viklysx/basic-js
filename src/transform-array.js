const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');

  let mass = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (mass.length !== 0 && arr[i - 2] !== "--discard-next") mass.pop();
        break;
      case '--double-next':
        if (i !== arr.length - 1) mass.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i >= 1 && arr[i - 2] !== "--discard-next") mass.push(arr[i - 1]);
        break;
      default:
        mass.push(arr[i]);
    }
  }
  return mass;
}