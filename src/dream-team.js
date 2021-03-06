const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayName) {
  let resultShifr =""

  let arrFilter = arrayName.filter(item => typeof item === 'string')
  for(let i = 0; i<arrFilter.length;i++){
    resultShifr += arrFilter[i].trim().substring(0, 1).toUpperCase() 
    
  }

 return resultShifr.split('').sort().join('')
 
};
