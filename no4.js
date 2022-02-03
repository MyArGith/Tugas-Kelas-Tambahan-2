let nama = ["Arpi", "Zhanpar", "Cahya", "Arul", "Ahmad"];
let cari = "Arul";

function cariNama(nama, cari) {
    for (var i = 0; i <nama.length; i++){
        if (nama [i] == cari) {
            console.log("orang ke empat adalah " + nama[i]);
            
        }
    }
}
cariNama(nama, cari);