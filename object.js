/*
1. Bikin 5 object masing masing minimal ada:
    - 2 property string
    - 2 property number
    - 1 property object lain
    - 1 property array
* Object pada nomor 1 boleh dimasukkan ke dalam array

2. Bikin 1 object yang berisi sebuah function untuk melakukan perhitungan matematika (tambah, kurang, kali, bagi, pangkat, modulus)
*/

const user = [
    {
        nama: "Toto",
        gender: "laki-laki",
        beratBadan: 59,
        tinggiBadan: 169,
        warna: {
            kulit: "sawo matang",
            rambut: "hitam",
            mata: "coklat gelap",
        },
        hobi: [
            "berkuda",
            "main catur"
        ]
    },
    {
        nama: "Tutu",
        gender: "laki-laki",
        beratBadan: 55,
        tinggiBadan: 162,
        warna: {
            kulit: "kuning langsat",
            rambut: "hitam",
            mata: "coklat gelap",
        },
        hobi: [
            "main catur sama tono",
            "berburu ubur ubur"
        ]
    },    
    {
        nama: "Tata",
        gender: "perempuan",
        beratBadan: 48,
        tinggiBadan: 164,
        warna: {
            kulit: "putih gading",
            rambut: "hitam",
            mata: "coklat gelap",
        },
        hobi: [
            "pelihara ubur ubur tutu",
            "masak"
        ]
    },    
    {
        nama: "Titi",
        gender: "perempuan",
        beratBadan: 47,
        tinggiBadan: 165,
        warna: {
            kulit: "putih gading",
            rambut: "hitam",
            mata: "coklat gelap",
        },
        hobi: [
            "makan masakan tata",
            "menulis"
        ]
    },    
    {
        nama: "Budi",
        gender: "laki-laki",
        beratBadan: 59,
        tinggiBadan: 170,
        warna: {
            kulit: "sawo matang",
            rambut: "hitam",
            mata: "coklat gelap",
        },
        hobi: [
            "baca tulisan titi",
            "berkuda sama toto"
        ]
    },

]

console.log(user[0],'\n')
console.log(user[1],'\n')
console.log(user[2],'\n')
console.log(user[3],'\n')
console.log(user[4],'\n')

const hitungMatematika = {
    bilangan1: 3,
    bilangan2: 7,
    tambah: () => {
        return hitungMatematika.bilangan1 + hitungMatematika.bilangan2
    },
    kurang: () => {
        return hitungMatematika.bilangan2 - hitungMatematika.bilangan1
    },
    kali: () => {
        return hitungMatematika.bilangan1 * hitungMatematika.bilangan2
    },
    bagi: () => {
        return hitungMatematika.bilangan2 / hitungMatematika.bilangan1
    },
    pangkat: () => {
        return hitungMatematika.bilangan1 ** hitungMatematika.bilangan2
    },
    modulus: () => {
        return hitungMatematika.bilangan2 % hitungMatematika.bilangan1
    }
}

console.log(hitungMatematika.tambah())
console.log(hitungMatematika.kurang())
console.log(hitungMatematika.kali())
console.log(hitungMatematika.bagi())
console.log(hitungMatematika.pangkat())
console.log(hitungMatematika.modulus())
