
//4.
DECLARE uang = X
DECLARE Rubik = 35000
DECLARE Mini = 185000
DECLARE Starwars = 350000

    IF uang <=Rubik 
        DISPLAY 'anda bisa beli Rubik dengan kembalian' CONCATENATE uang-Rubik
    IF ELSE uang > Rubik && uang<Starwars
        DISPLAY 'anda bisa beli Mini dengan kembalian' CONCATENATE uang-Mini
    IF ELSE uang >= Starwars
        DISPLAY 'anda bisa beli Starwars dengan kembalian' CONCATENATE uang-Starwars
    ELSE
        DISPLAY 'nabung lagi ya dek'
