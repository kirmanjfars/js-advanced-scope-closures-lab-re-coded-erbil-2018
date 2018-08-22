function produceDrivingRange(blockRange ){
  return function(start, end){
    let temp1= parseInt(start);
    let temp2 = parseInt(end);
    let result = temp2 - temp2;
    
    if(result > 4){
      return '2 blocks out of range';
    }else{
      return 'within range by 4';
    }
    
  }
}