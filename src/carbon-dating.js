const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string' && sampleActivity.length !== 0 && ((parseFloat(sampleActivity) < 15) && parseFloat(sampleActivity) > 0)) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
    t = Math.ceil(t);
    if (t > 0) return t;
  }   
  return false;
};
