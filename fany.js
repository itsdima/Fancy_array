//This function displays the given names 1) With the symbol the user passes, 2)with a default symbol, 3)reversed if user passes true
function Names(symbol, sign){
arr=['James', 'Jill', 'Jane', 'Jack']; 
  for(var i = 0; i< arr.length; i++){
    if (symbol === true){
      for(var x = arr.length-1; x >=0; x-- ){
        console.log(x + sign + arr[x]);
      }
      break; 
    }
    if(symbol === undefined){
      console.log(i + '->' + arr[i]); 
      continue; 
    }
    console.log(i + symbol + arr[i]); 
  }
}
Names(true, "<"); 
Names(); 
Names(':'); 