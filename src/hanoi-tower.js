const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let action = Math.pow(2, disksNumber) - 1;
  turnsSpeed = turnsSpeed / 3600;
  return {
    turns: action, 
    seconds: Math.floor(action / turnsSpeed)
  }
};
