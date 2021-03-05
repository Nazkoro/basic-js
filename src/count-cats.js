const CustomError = require("../extensions/custom-error");

module.exports = function countCats(posibleCats) {


  let cat ='^^'
  let countCat = 0
for(let i =0; i<posibleCats.length;i++){

  for(let j = 0; j<posibleCats[i].length;j++){
    if(posibleCats[i][j]===cat)
    { countCat++
    }
    
  }
}


 return countCat
};
