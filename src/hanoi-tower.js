const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let count =Math.pow(2,disksNumber) - 1

  let time = Math.floor((3600/turnsSpeed)*count)

  return {
      turns: count,
      seconds: time
  }
};
