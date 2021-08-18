function stringToArray(string) {

    const result = string.split(" ");
    return result;
   }
   
   stringToArray('Robin Singh');

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript



function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
    const str = dna;
    const result = str.replace(/T/gi, 'U');
    return result;
    
  }
  DNAtoRNA('TTT');
  //https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript


  var min = function(list){
    var minNumber = list[0];
  
     for(var i=1; i < list.length; i++) {

       if(list[i] < minNumber){
         minNumber = list[i];   
       }
       
      }
  
    return minNumber;
}

var max = function(list) {
    
    var maxNumber = list[0];
  
     for(var i=1; i < list.length; i++) {

       if(list[i] > maxNumber){
         maxNumber = list[i];   
       }
       
      }
  
    return maxNumber;
}

min([4,6,2,1,9,63,-134,566]);
max([4,6,2,1,9,63,-134,566]);

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript


function min(arr, toReturn) {
    // TODO
    var minValue = arr[0];
    var index = 0;
    
    for(var i=1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
        index = i;
      }
    }
    
    if(toReturn === 'value') {
      return minValue;
    } 
    return index;
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

