function produceDrivingRange(blockRange ){
  return function(){
    if(blockRange>10){
      return true
    }else{
      return false;
    }
  }
}