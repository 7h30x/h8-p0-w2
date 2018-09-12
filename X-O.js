// X dan O

function xo(str) {
   
    //var x=(str.match(/x/g) || []).length;
    //var o=(str.match(/o/g) || []).length;
    

    var counterX = 0
    var counterO = 0
    for (let i=0;i<str.length;i++) {
        if (str[i]==='x') {
          counterX++;
        }
        else if (str[i]==='o') {
          counterO++;
        }
    }
    
    if (counterX===counterO) {
        return true;
      }    
    else {
        return false;
      } 
    
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
