function produceDrivingRange( ){
  return function(blockRange){
    if(blockRange>10){
      return true
    }else{
      return false;
    }
  }
}