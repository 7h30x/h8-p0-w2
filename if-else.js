//isi kedua variabel dibawah dan run code.
var nama = 'theo';
var peran = 'Ksatria';

if (nama===''){
    console.log('nama harus diisi!');
}

else if (peran === '') {
        console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
    }
else if (peran === 'Ksatria') { 
        console.log(`Selamat datang di dunia neraka ${peran} ${nama}, siap-siap untuk menderita!`);
    }
else if (peran === 'Tabib') { 
        console.log(`Selamat datang di dunia neraka ${peran} ${nama}, amitabha!`);
    }
else if (peran ===  'Penyihir') { 
        console.log (`Selamat datang di dunia neraka ${peran} ${nama}, sancai, sancai!`);
    }
else {
    console.log (`pilih dari peran: Ksatria, Tabib, Penyihir !`);
}
