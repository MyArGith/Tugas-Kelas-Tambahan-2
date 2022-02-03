var namakelas = [
    {nama: 'Arpi', Kelas: 'XI RPL 1'},
    {nama: 'Ikhsan', Kelas: 'XI RPL 1'},
    {nama: 'Ilham', Kelas: 'XI RPL 1'},
    {nama: 'Zhanpar', Kelas: 'XI RPL 1'},
    {nama: 'Pradip', Kelas: 'XI RPL 1'},
    {nama: 'Arul', Kelas: 'XI RPL 1'},
    {nama: 'Herdiansyah', Kelas: 'XI RPL 2'},
    {nama: 'Fadly', Kelas: 'XI RPL 2'},
    {nama: 'Fauzi', Kelas: 'XI RPL 3'},
]
function seleksi() {
 var filter=  namakelas.filter (nama => {
     
     return nama.Kelas == "XI RPL 2"
  });
  console.log(filter);    
}
seleksi();