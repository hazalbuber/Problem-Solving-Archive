function squareOrSquareRoot(array) {
    let resultArray = [];
  
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      if (Math.sqrt(num) % 1 === 0) {
        resultArray.push(Math.sqrt(num));  
      } else {
        resultArray.push(num * num);  
      }
    }
    
    return resultArray;  
  }