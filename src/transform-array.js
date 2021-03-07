const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let minusPrev='--discard-prev'
  let minusNext='--discard-next'
  let doublePrev='--double-prev'
  let doubleNext='--double-next'
  let newArr = []

  for(let i=0; i<arr.length; i++){
    newArr.push(arr[i])
    if(arr[arr.length-1]===doubleNext){
      continue
    }

    if(arr[i]===doubleNext){

      newArr.push(arr[i+1])
    }


    if(newArr[i-2]===minusNext &&newArr[i]===doublePrev ||newArr[i-2]===minusNext &&newArr[i]===minusPrev  )  
    {
   
      newArr.splice(i,1)
      continue
     }

    
  }


  for (let j = 0; j < newArr.length; j++) {

    if (newArr[newArr.length-1] ===minusNext || newArr[newArr.length-1] ===doubleNext){
      newArr.pop()
      continue
      
    } 
    if (newArr[0] ===minusPrev || newArr[0] ===doublePrev){
      newArr.splice(j,1)
      continue
    } 
     

    if(newArr[j] ===minusPrev){
      newArr.splice(j-1,2)
    }
  
    if(newArr[j]=== minusNext){
      newArr.splice(j,2)
    }

    
    if(newArr[j]=== doublePrev){
      
      newArr.splice(j,0,newArr[j-1])
      newArr.splice(j+1,1)
    }
  
    if(newArr[j]=== doubleNext){
      newArr.splice(j,1)
    }
   
  
  }

  return newArr

};
