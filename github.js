class pengenalan {
  constructor(nama, umur, pekerjaan) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    this.nama = nama
    this.umur = umur
    this.tahunLahir = currentYear - this.umur
    this.pekerjaan = pekerjaan
  }
  
  cekHasil(){
    console.log(`${this.nama} sudah berumur ${this.umur} dgn perkiraan lahir pada tahun ${this.tahunLahir} dan dgn status ${this.pekerjaan}`)
  }
}

const test1 = new pengenalan('Rizky', 15, 'tdk bekerja')

test1.cekHasil()

let angka1 = 10
let angka2 = 5
let hasil = angka1 * angka2
console.log(hasil)

let a = 5
let b = 10
a = 10
b = 5
console.log(a)
console.log(b)

let tipe = true
console.log(typeof(tipe))
console.log(typeof(b))
console.log(typeof(a))

let umur = 18
if (umur > 17){
  console.log('bisa buat ktp')
}else{
  console.log('blum bisa buat ktp')
}

let angka = 8271
const tesAngka = x => {
  if (x%2 === 0){
    console.log('genap')
  }else{
    console.log('ganjil')
  }
}
tesAngka(angka)


let nilai = 80

if (nilai > 80) {
  console.log('A')
}else if (nilai >= 60 && nilai <= 80) {
  console.log('B')
}else{
  console.log('C')
}

let hari = 4
switch (hari) {
  case 1:
    console.log('senin')
    break;
  case 2:
    console.log('selasa')
    break;
  case 3:
    console.log('rabu')
    break;
  case 4:
    console.log('kamis')
    break;
  case 5:
    console.log('jumat')
    break;
  case 6:
    console.log('sabtu')
    break;
  case 7:
    console.log('minggu')
    break;
  
  default:
    console.log('bukan hari')
}

function kaliDua(A) {
  return A * 2
}
const kaliTiga = B => B * 3

console.log(kaliDua(7))
console.log(kaliTiga(7))

function perkenalan(nama, umur, hobi) {
  console.log(`nama saya adalah ${nama} saya berumur ${umur} dan saya memikiki hobi ${hobi}`)
}
perkenalan('budi', 40, 'makan')

const luasPersegi = x => x * x 
console.log(luasPersegi(5))

let p = ''
if (p === '') {
  console.log('kosong')
} else {
  console.log('berisi')
}

let apalah = ['test']
apalah.push('itu')
console.log(apalah)

for (var i = 0; i < 10; i++) {
  console.log(i)
}

let angkaa = [1,2,3,4,5]
console.log(angkaa.map(x => x * 10)) 

let numbers = [5, 12, 8, 130, 44]
console.log(numbers.find(nums => nums > 10)) 

let hargas = [1000,2000,3000]
console.log(hargas.reduce(function(acc, curr){
  return acc + curr 
}, 0)) 

class Mobil {
  constructor(merk, tahun) {
    this.merk = merk
    this.tahun = tahun
  }
  
  nyalakanMesin(){
    console.log('mobil nyala')
  }
}

const mobil = new Mobil('toyota', 1919)
mobil.nyalakanMesin()

const pengguna = [
  { nama: "Andi", umur: 19 },
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 22 }
];

const penggunaBaru = pengguna.filter(array => array.umur >= 20)
console.log(penggunaBaru)


function pembalik(str) {
  return str.split('').reverse().join('')
}

let tes = pembalik('JavaScript')
console.log(tes)

function cekHuruf(cek) {
  let huruf = 0
  
  for (let hurufs of cek) {
    if(hurufs.toUpperCase() === 'A'){
      huruf++
    }else{}
  }
  return huruf
}

let tesss = cekHuruf('halo')
console.log(tesss)

function cekBenar (cek){
  return cek.filter(boolean)
}

setTimeout(() => {
  console.log('2 detik')
}, 2000)

