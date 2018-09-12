/*Newton's Second Law 
STORE mass as 600KG
STORE acceleration as 2 ms^-2
STORE Force as mass * acceleration
COMPUTE Force
DISPLAY Force

*/

/*Laundry Day 
STORE 'jumblahPakaianKotor' = 20
STORE 'pakaianDicuci'=0
STORE function 'mencuci' (pakaianDicuci) {
    DISPLAY `${pakaianDicuci} pcs pakaian sudah bersih `
}

WHILE 'pakaianDicuci'<'jumblahPakaianKotor'
    
    INCREMENT 'pakaianDicuci'
END WHILE

COMPUTE mencuci(pakaianDicuci)




*/

/*Periksa Kuku 
STORE 'jumblah-murid'= 40

STORE function 'cek-kuku-panjang' as
        IF panjang
            RETURN true
        ELSE 
            RETURN false

FOR 'nomor-murid' until 'jumblah-murid'

    IF 'cek-kuku-panjang' is true
        DISPLAY 'kamu harus di hukum'
    ELSE 
        DISPLAY 'kuku kamu rapi'
    ENDIF    
  
ENDFOR

*/

/*Tahun Kabisat 
    READ year 
    IF (year MOD 4 ===0 && year MOD 100 !==0) OR (year MOD 4 ===0 && YEAR MOD 100 ===0 && YEAR MOD 400==0)
        DISPLAY year is a leapyear

    ELSE
        DISPLAY year is not a leapyear
    ENDIF
    




*/
