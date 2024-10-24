function main() {
    const hasilDadu = [1, 5, 2, 6, 2, 3]
  
    let kemunculanGanjil = 0;
    let kemunculanGenap = 0;
  
    for (let angka of hasilDadu){
      if (angka % 2 !== 0){
          kemunculanGanjil++;
      }
      else{
          kemunculanGenap++;
      }
    }
  console.log(`Raka mendapatkan angka ganjil sebanyak ${kemunculanGanjil} kali dan angka genap sebanyak ${kemunculanGenap} kali `)
  
  }
  main()
  
  module.exports = main