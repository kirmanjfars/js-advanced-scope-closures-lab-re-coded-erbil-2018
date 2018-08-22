function produceDrivingRange(blockRange ){
  return function(start, end){
    let temp1= parseInt(start);
    let temp2 = parseInt(end);
    let temp3 = temp2 - temp2;
    let result = blockRange - temp3;
    
    if(result > 0){
       return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
    
  }
}