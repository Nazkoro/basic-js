const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity === 'string'){
    let thisActivity = Number(sampleActivity)
  if(thisActivity>0 && thisActivity <15 ){
let k = 0.693/HALF_LIFE_PERIOD
  
  let temp = MODERN_ACTIVITY/thisActivity
  let t = Math.ceil((Math.log(temp))/k)

  return t

    }
  }

  return false
  
};
