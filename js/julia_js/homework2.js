function stringToArray(string){
    const arrayOfString = string.split(' ');
    return arrayOfString;
  }

//   https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript


function DNAtoRNA(dna) {
    const re = /T/g;
    const rna = dna.replace(re, 'U');
    return rna;
  }

//   https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
