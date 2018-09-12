//1.
var name=""
var age=54
var money=100000
var steak=300000

if (name==="") {
    console.log('Anda tidak boleh masuk!');
    
}
else {
    if (age<55) {
        if (money<steak) {
            console.log("uang tidak cukup, anda harus pulang.")
        }
        else {
            console.log("anda bisa pesan steak. Sisa uang anda " + (money-steak) )
        }


    }

    else  {
        diskon=steak*0.3;
        if (money<steak-diskon) {
                console.log("uang tidak cukup, anda harus pulang.")
            }
            else {
                console.log("anda bisa pesan steak. Sisa uang anda " +(money-steak+diskon))
            }

    }
}

//2.
var max =10
var counterRow=0;
var container="" 
if (max%2===0){
  max--;
}

while (counterRow<=max) {
    for (num=max; num>0 && num<=max; num-=2) {
        container+=num
    }
    container+='\n';
    counterRow++;

}
console.log(container)

//3.

function drawLadder (row) {
    counterRow=0;
    container='';
    counter1='';
    function odd(x) {
        if (x %2==0) {
            return true;
        } 
        else if (x%2!=0) {
            return false;
        }

        }

    
    
        while  (counterRow<=row/2) {
            for (col=1; col<=counterRow; col++) {
                if (odd(col)==false) {
                    container+='x';
                }
                else if (odd(col)==true) {
                    container+='o';
                }
            }
            container+='\n';
            counterRow++;
            counter1++;
        }
        while (counterRow>row/2 && counterRow<=row) {
            for (col=counter1-1; col>0; col--) {
                if (odd(col)==false) {
                    container+='x';
                }
                else if (odd(col)==true) {
                    container+='o';
                }
            }
            container+='\n';
            counterRow++;
            counter1--;
            
        }
      
    
 return container;
}

drawLadder (6)


//4.
store 'uang' = any value
store 'Rubik' = 35000
store 'Mini' = 185000
store 'Starwars' = 350000

    IF 'uang' <= 'Rubik' 
        DISPLAY "anda bisa beli Rubik dengan kembalian" CONCATENATE uang-Rubik
    IF ELSE uang > Rubik && uang<Starwars
        DISPLAY "anda bisa beli Mini dengan kembalian" CONCATENATE uang-Mini
    IF ELSE uang >= Starwars
        DISPLAY "anda bisa beli Starwars dengan kembalian" CONCATENATE uang-Starwars
    ELSE
        DISPLAY "nabung lagi ya dek"

// livecode review

//conditional-statements problem 

var nama='Mikael';
var peran='';

function game(nama, peran) {
    if (nama='') {
        console.log("Nama harus diisi!");
    }
    else {
        switch (peran) {
            case Tabib: 
                console.log('Selamat datang di Dunia Proxytia');
                console.log(`Halo tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
                break;
            case Ksatria: 
                console.log('Selamat datang di Dunia Proxytia');
                console.log(`Halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
                break;
            case Penyihir: 
                console.log('Selamat datang di Dunia Proxytia');
                console.log(`Halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
                break;
            default: 
            console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);

        } 

    }
    
}
/* PSEUDOCODE 

STORE 'nama' with any value
STORE 'peran' with any value 
IF 'nama' ==""
    DISPLAY "nama harus diisi"
ELSE 
    SWITCH peran 
        CASE "Tabib"
            DISPLAY "Selamat datang di Dunia Proxytia" + 'nama'
            DISPLAY "Halo tabib" + 'nama' + "kamu akan membantu temanmu yang terluka."
        CASE "Ksatria"
            DISPLAY "Selamat datang di Dunia Proxytia" + 'nama'
            DISPLAY "Halo ksatria" + 'nama' + "kamu akan membantu temanmu yang terluka."
        CASE "Penyihir"
            DISPLAY "Selamat datang di Dunia Proxytia" + 'nama'
            DISPLAY "Halo penyihir" + 'nama' + "kamu akan membantu temanmu yang terluka."
        DEFAULT 
            DISPLAY "Halo" + 'name'+ "Pilih peranmu untuk memulai game!"
        */
        
        
        
//Looping Multi-dimensional Arrays 
[
    [1,2,3,4]
    [1,2,3,4]
    [1,2,3,4]
    [1,2,3,4]
]

[
    [],
    [],
    [],
    []
]

var array=[];
var length=4;
for (x=0;x<4;x++) {
    array.push([]);
}
console.log(array)

var array=[];
var length=4;
for (x=0;x<4;x++) {
    array.push([]);
    for (y=1;y<=4;y++){
        array[x].push(y);
    }
}
console.log(array)


function looper (max){
    var array=[];
    
    for (x=0;x<max;x++) { //this loop creates [max] empty arrays 
        array.push([]);
        for (y=max-x;y>0;y--){ // this loop initially starts with 4 loops, then 3, then 2, then 1. The initial number of the array should be max - array index. 
            array[x].push(y);
        }
    }
    return array;
  }
}
