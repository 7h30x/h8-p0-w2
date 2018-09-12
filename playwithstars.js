


//1.

var rows = 2
var counter=0
while (counter<rows){
    console.log('*');
    counter++;
    }

//2.

asterix='*'
maxrow=5
for (rows=0; rows<maxrow; rows++) {
     while (asterix.length<maxrow) {
        asterix=asterix.concat('*');
    }
 
    console.log(asterix);
}

//3.

maxrows=5
asterix='*'
for (rows=1; rows<=maxrows; rows++) {
    
    while (asterix.length<rows) {
        asterix +='*';
    }
    console.log(asterix);
} 

function Square (rows, columns) {
    counterRow=1
    asterix= '*'
    square='' //square image stored here
    while (counterRow <=rows) {
        console.log(counterRow);
      //if first or last row
        if (counterRow===1 || counterRow===rows) {
          //concat * x columns and start new row
            square+= asterix.repeat(columns) +'\n'
            counterRow++;
                     
        }

        else {
          //while column is within columns
            for (col=0; col<width; col++) {
             //print * for border columns
                if (col === 0 || col === width-1 ) {
                    square+=asterix;
                    col++;
                } 
               //otherwise print blank 
                else {
                    square+=' ';
                    col++;   
                }
            }
          square+='\n'; //onto next row
          counterRow++; //increase row counter
                  
    }
    return square;
}

//call function:
Square (10,10);


function Triangle (base) {
    
    var triangle='' //initiate triangle shape holder
    var starsinRow='*' //increments up
    var totalIndent= base -1 ; //total size of blank space, is incremented down 
    while (starsinRow.length < base) { 
         
        for (column =0; column < base; column++) {
            if (column < totalIndent/2 || column >= totalIndent/2 + starsinRow.length) {
                triangle += " ";
            }
            else {
                triangle += '*';
                
            }    //algorithm to populate each row, up to column number [base].
            
        }
        triangle+="\n";//new line char for end of  row
        
        totalIndent-=2;  //decrease total indent by number of new stars (to keep width of row as base)
        starsinRow+='**';    //each row has 2 more stars than previous
    }   

    return triangle;
}
Triangle(10)




function diamond (width) {
//width is the longest width at the middle of the diamond

    var starsinRow = 1 ;//initial =1
    var starsinRow2 = width;
    var diamond = '' ;
    var totalIndent= width-1  //decrements by 2, then increments by 2
    while (starsinRow <width ) {
        for (col=0; col<width; col++) {
            if (col<totalIndent/2 || col >= totalIndent/2 + starsinRow) {
                diamond+=' ';
            }
            else {
                diamond+= '*'
            }
        }
        diamond+='\n';
        starsinRow+=2;
        totalIndent-=2;
    }
   while (starsinRow2>0 && (starsinRow===width || starsinRow===width+1)) {
        for (col=0; col<width; col++) {
            if (col<totalIndent/2 || col >= totalIndent/2 + starsinRow2) {
                diamond+=' ';
            }
            else {
                diamond+= '*'
            }
        }
        diamond+='\n';
        starsinRow2-=2;
        totalIndent+=2;
    }
    return diamond;
}

diamond(21)


function Rectangle(width, height) {
    counterRow = 0;
    rectangle ="";
    while (counterRow < width) {
        for (col=0; col<height; col++){
            rectangle+='*';
    
        }
        counterRow++;
        rectangle+='\n'
    }
    return rectangle;
}
 Rectangle(5,6)




 function Gram(base) {
    counterRow=0;
    gram="";
    length=base/2
    indent=(base-length)/2
    while (counterRow <=(base-length)/2) {
        counterCol=0;
        while (counterCol<base) {
            if (counterCol<indent || counterCol>length+indent) {
                gram+=' ';
                }
            else {
                    gram+='*';
                }
                counterCol++;
            
            }
        counterRow++;
        gram+='\n';
        indent--;    
    }
    return gram;
}   
Gram(20)





function Lightning (height) {
    if (height%2!=0) {height+=1;  console.log(height)}
    else {}
    width= height/2;
    counterRow=0;
    indent=width;
    indent2=width;
    lightning=''
    
    while (counterRow<height) {
        if (counterRow<height/2) {
            for (col=1; col<=width; col++) {
                if (col<indent || col> indent) {
                    lightning+=' ';
                }
                else {
                    lightning+='*';
                    }
                }
                counterRow++;
                console.log(width);
                lightning+='\n';
                indent--;
        }
        else if (counterRow===height/2) {
            for (col=0; col<width; col++) {
                lightning+='*';

            }
            lightning+='\n';
            counterRow++;
        }
        else  {                     //only gets executed if prior two if conditions evaluate to false
            for (col=0; col<=width; col++) {
                if (col<indent2 || col> indent2) {
                    lightning+=' ';
                }
                else {
                    lightning+='*';
                    }
                }
                counterRow++;
                console.log(counterRow);
                lightning+='\n';
                indent2--;
        } 
      

    }
    return lightning;

}
Lightning(21);




function Triangle2 (base) {
    triangle='';
   
    totalindent= base-1;
    for (stars='*'; stars.length<base; stars+='**') {
        for (col=0; col<base; col++) {
            if (col<totalindent/2 || col>= totalindent/2+ stars.length) {
                triangle+='b';
            }
            else {
                triangle+='*';
            }
        }
        totalindent-=2;
        triangle+='\n';

    }
    return triangle;

}
Triangle2 (10)
