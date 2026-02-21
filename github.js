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