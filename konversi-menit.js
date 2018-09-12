
//konversi menit

function konversiMenit (menit) {
    let hours=0;
    while (menit>=60) {
        hours++;
        menit=menit-60;
    }
    if (menit<10){
        return hours + ':0' + menit
    
    }
    else{
        return hours + ':' + menit
    }
    
}
