function produceDrivingRange(blockRange ){
  return function(start, end){
    if(blockRange>10){
      return true
    }else{
      return false;
    }
  }
}