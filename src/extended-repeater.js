const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    let intermediateResult = [];
    let result = [];
    let repeatTimes = ((options.repeatTimes !== undefined) && options.repeatTimes > 0) ? options.repeatTimes : 1;
    let separator = (options.separator === undefined) ? '+' : options.separator;
    let addition = (options.addition === undefined) ? '' : String(options.addition);
    let additionRepeatTimes = ((options.additionRepeatTimes !== undefined) && options.additionRepeatTimes > 0) ? options.additionRepeatTimes : 1;
    let additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;
   
    for (let i = 1; i <= additionRepeatTimes; i++) {
        intermediateResult.push(addition);
    }
    intermediateResult = intermediateResult.join(additionSeparator);   
    for (let i = 1; i <= repeatTimes; i++) {
        result.push(str + intermediateResult);
    }
    return result.join(separator);

};