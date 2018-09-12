//1.
number=0

console.log('LOOPING PERTAMA');

while (number<=20) {
    console.log(`${number} - I love coding`);
    number = number+=2;
}
console.log('LOOPING KEDUA');
while (number>0) {
    console.log(`${number} - I will become a fullstack dev`);
    number = number-=2;
}

//2.


        console.log('LOOPING PERTAMA');
        for (var number=1; number <=20; number++) {
            console.log(`${number} - I love coding`);
        }

        console.log('LOOPING KEDUA')
        for (var number=20; number >0; number--) {
            ;
            console.log(`${number} - I will become a fullstack dev`);
        }
    

//3.

for (var counter =1; counter < 100; counter++ ) {
    if (counter%2 === 0) {
        console.log('EVEN');
    }
    else {
        console.log('ODD');
    }
       
}


for (var counter =1; counter < 100; counter+=2 ) {
    if (counter%3 === 0) {
        console.log(`${counter} kelipatan 3`);
    }
    else {
      console.log(" ")
    }
       
}

for (var counter =1; counter < 100; counter+=5 ) {
    if (counter%6 === 0) {
        console.log(`${counter} kelipatan 6`);
    }
    else {
      console.log(" ")
    }
       
}

for (var counter =1; counter < 100; counter+=9 ) {
    if (counter%10 === 0) {
        console.log(`${counter} kelipatan 10`);
    }
    else {
      console.log(" ")
    }
       
}
