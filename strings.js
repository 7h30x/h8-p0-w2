// lets form a sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!'

var sentence = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;
console.log(sentence);


//index accessing

var firstword = sentence[0] + sentence[1] + sentence[2] + sentence[3] + sentence[4] + sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var secondword = sentence[11] + sentence[12];
var thirdword = sentence[14] + sentence[15] + sentence[16] + sentence[17] + sentence[18] + sentence[19] + sentence[20];
var fourthword = sentence[22] + sentence[23] + sentence[24];
var fifthword = sentence[26];
var sixthword = sentence[28] + sentence[29] + sentence[30] + sentence[31];
var seventhword = sentence[33] + sentence[34];

console.log(`First word is ${firstword}`);
console.log(`second word is ${secondword}`);
console.log(`Third word is ${thirdword}`);
console.log(`Fourth word is ${fourthword}`);
console.log(`fifth word is ${fifthword}`);
console.log(`sixth word is ${sixthword}`);
console.log(`seventh word is ${seventhword}`);

//break string using substring
//javascript is awesome and i love it
var firstword = sentence.substring(0,10); 
var secondword = sentence.substring(11,13); 
var thirdword = sentence.substring(14,21); 
var fourthword =sentence.substring(22,25); 
var fifthword = sentence.substring(26,27); 
var sixthword = sentence.substring(28,32); ;
var seventhword = sentence.substring(33,35);

console.log(`First word is ${firstword}`);
console.log(`second word is ${secondword}`);
console.log(`Third word is ${thirdword}`);
console.log(`Fourth word is ${fourthword}`);
console.log(`fifth word is ${fifthword}`);
console.log(`sixth word is ${sixthword}`);
console.log(`seventh word is ${seventhword}`);

//word length

var firstwordlength = firstword.length;
var secondwordlength = secondword.length;
var thirdwordlength = thirdword.length;
var fourthwordlength =fourthword.length;
var fifthwordlength = fifthword.length;
var sixthwordlength = sixthword.length;
var seventhwordlength = seventhword.length;

console.log(`First word is ${firstword} with length: ${firstwordlength}`);
console.log(`second word is ${secondword} with length: ${secondwordlength}`);
console.log(`Third word is ${thirdword} with length: ${thirdwordlength}`);
console.log(`Fourth word is ${fourthword}  with length: ${fourthwordlength}`);
console.log(`fifth word is ${fifthword} with length: ${fifthwordlength}`);
console.log(`sixth word is ${sixthword} with length: ${sixthwordlength}`);
console.log(`seventh word is ${seventhword} with length: ${seventhwordlength}`);











